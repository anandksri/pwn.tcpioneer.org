import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(3)
      .max(20)
      .regex(/^[a-zA-Z0-9_]+$/, "Username may only contain letters, numbers and underscores."),

    email: z.string().trim().email().transform((value) => value.toLowerCase()),

    password: z.string().min(8).max(128),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export const loginSchema = z.object({
  identifier: z.string().trim().min(1).max(254),
  password: z.string().min(1).max(128),
});

export const emailSchema = z.object({
  email: z.string().trim().email().transform((value) => value.toLowerCase()),
});

export const otpSchema = emailSchema.extend({
  otp: z.string().regex(/^\d{6}$/, "OTP must be a 6-digit code."),
});

export const resetPasswordSchema = otpSchema.extend({
  password: z.string().min(8).max(128),
});
