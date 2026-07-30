import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3)
      .max(20),

    email: z
      .string()
      .email(),

    password: z
      .string()
      .min(8),

    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match.",
    }
  );