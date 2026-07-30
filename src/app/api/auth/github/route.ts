import { NextResponse } from "next/server";
import { getGitHubAuthURL } from "@/lib/github";

export async function GET() {
  return NextResponse.redirect(getGitHubAuthURL());
}