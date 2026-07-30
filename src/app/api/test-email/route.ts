import { NextResponse } from "next/server";
import { sendVerificationEmail } from "@/utils/mail";

export async function GET() {
  await sendVerificationEmail(
        "anandkeshari0711@gmail.com",
    "Anand Keshari",
    "482951"
  );

  return NextResponse.json({
    success: true,
  });
}