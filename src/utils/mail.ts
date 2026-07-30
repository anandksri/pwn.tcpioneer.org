import { resend } from "@/lib/resend";

import VerifyEmail from "@/emails/VerifyEmail";
import ResetPasswordEmail from "@/emails/ResetPassword";

export async function sendVerificationEmail(
  email: string,
  username: string,
  otp: string
) {
  return await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: "Verify your TC Pioneer account",
    react: VerifyEmail({
      username,
      otp,
    }),
  });
}

export async function sendResetPasswordEmail(
  email: string,
  username: string,
  otp: string
) {
  return await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: "Reset your TC Pioneer password",
    react: ResetPasswordEmail({
      username,
      otp,
    }),
  });
}