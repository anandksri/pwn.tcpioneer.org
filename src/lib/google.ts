import { OAuth2Client } from "google-auth-library";

function getGoogleConfig() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error("Google OAuth is not configured.");
  }

  return { clientId, clientSecret, redirectUri };
}

function createGoogleClient() {
  const { clientId, clientSecret, redirectUri } = getGoogleConfig();
  return new OAuth2Client(clientId, clientSecret, redirectUri);
}

export function getGoogleAuthURL() {
  const { clientId } = getGoogleConfig();
  return createGoogleClient().generateAuthUrl({
    access_type: "offline",
    prompt: "select_account",
    scope: ["openid", "email", "profile"],
    client_id: clientId,
  });
}

export async function getGoogleUser(code: string) {
  const { clientId } = getGoogleConfig();
  const client = createGoogleClient();
  const { tokens } = await client.getToken(code);

  if (!tokens.id_token) {
    throw new Error("Google did not return an identity token.");
  }

  const ticket = await client.verifyIdToken({
    idToken: tokens.id_token,
    audience: clientId,
  });
  const payload = ticket.getPayload();

  if (!payload?.email || payload.email_verified === false) {
    throw new Error("Google account email is unavailable or unverified.");
  }

  return payload;
}
