import { Octokit } from "@octokit/rest";

export function getGitHubAuthURL() {
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    redirect_uri: process.env.GITHUB_REDIRECT_URI!,
    scope: "read:user user:email",
  });

  return `https://github.com/login/oauth/authorize?${params.toString()}`;
}

export async function getGitHubUser(code: string) {
  // Exchange code for access token
  const tokenResponse = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID!,
        client_secret: process.env.GITHUB_CLIENT_SECRET!,
        code,
        redirect_uri: process.env.GITHUB_REDIRECT_URI!,
      }),
    }
  );

  const tokenData = await tokenResponse.json();

  if (!tokenData.access_token) {
    throw new Error("Failed to obtain GitHub access token.");
  }

  const octokit = new Octokit({
    auth: tokenData.access_token,
  });

  const { data: profile } = await octokit.users.getAuthenticated();

  const { data: emails } = await octokit.users.listEmailsForAuthenticatedUser();

  const primaryEmail = emails.find((e) => e.primary)?.email ?? emails[0]?.email;

  if (!primaryEmail) {
    throw new Error("GitHub account has no accessible email.");
  }

  return {
    email: primaryEmail,
    username: profile.login,
    avatar: profile.avatar_url,
    name: profile.name,
  };
}
