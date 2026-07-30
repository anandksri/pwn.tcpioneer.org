import { OAuth2Client } from "google-auth-library";

export const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID!,
  process.env.GOOGLE_CLIENT_SECRET!,
  process.env.GOOGLE_REDIRECT_URI!
);

export function getGoogleAuthURL() {
  return googleClient.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: ["openid", "email", "profile"],
  });
}

export async function getGoogleUser(code: string) {
  const { tokens } = await googleClient.getToken(code);

  googleClient.setCredentials(tokens);

  const ticket = await googleClient.verifyIdToken({
    idToken: tokens.id_token!,
    audience: process.env.GOOGLE_CLIENT_ID!,
  });

  const payload = ticket.getPayload();

  if (!payload) {
    throw new Error("Unable to fetch Google profile.");
  }

  return payload;
}
