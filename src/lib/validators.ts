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

export const challengeFlagSchema = z.object({
  flag: z.string().trim().min(1).max(256),
});

const challengeFields = {
  slug: z.string().trim().min(2).max(120).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().trim().min(2).max(120),
  description: z.string().trim().min(10).max(2000),
  category: z.string().trim().min(2).max(60),
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
  points: z.number().int().min(1).max(10000),
  moduleId: z.string().trim().min(1).nullable().optional(),
  published: z.boolean().optional(),
};

export const adminChallengeCreateSchema = z.object({
  ...challengeFields,
  flag: z.string().trim().min(1).max(256),
});

export const adminChallengeUpdateSchema = z
  .object({
    ...challengeFields,
    flag: z.string().trim().min(1).max(256).optional(),
  })
  .partial();
