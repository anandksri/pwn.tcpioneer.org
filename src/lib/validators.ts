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

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1).max(128),
    password: z.string().min(8).max(128),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  })
  .refine((data) => data.currentPassword !== data.password, {
    path: ["password"],
    message: "New password must be different from your current password.",
  });

const moduleFields = {
  slug: z.string().trim().min(2).max(120).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().trim().min(2).max(120),
  description: z.string().trim().min(10).max(2000),
  category: z.string().trim().min(2).max(60),
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
  estimatedMinutes: z.number().int().min(1).max(10000),
  sortOrder: z.number().int().min(0).max(100000),
  published: z.boolean().optional(),
};

export const adminModuleCreateSchema = z.object(moduleFields);
export const adminModuleUpdateSchema = z.object(moduleFields).partial();

const lessonFields = {
  slug: z.string().trim().min(2).max(120).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().trim().min(2).max(160),
  summary: z.string().trim().min(10).max(500),
  content: z.string().trim().min(20).max(50000),
  sortOrder: z.number().int().min(0).max(100000),
  published: z.boolean().optional(),
};

export const adminLessonCreateSchema = z.object(lessonFields);
export const adminLessonUpdateSchema = z.object(lessonFields).partial();

const eventDateSchema = z.string().datetime({ offset: true }).transform((value) => new Date(value));
const eventUrlSchema = z
  .string()
  .trim()
  .max(2048)
  .url()
  .refine((value) => value.startsWith("https://") || value.startsWith("http://"));

const adminEventFields = {
  title: z.string().trim().min(2).max(140),
  description: z.string().trim().min(10).max(4000),
  category: z.string().trim().min(2).max(60),
  startsAt: eventDateSchema,
  endsAt: eventDateSchema.nullable().optional(),
  location: z.string().trim().max(160).nullable().optional(),
  registrationUrl: eventUrlSchema.nullable().optional(),
  published: z.boolean().optional(),
};

function validateEventDates(
  data: { startsAt?: Date; endsAt?: Date | null },
  context: z.RefinementCtx,
) {
  if (data.startsAt && data.endsAt && data.endsAt < data.startsAt) {
    context.addIssue({
      code: "custom",
      path: ["endsAt"],
      message: "End time must be after the start time.",
    });
  }
}

export const adminEventCreateSchema = z
  .object(adminEventFields)
  .superRefine(validateEventDates);
export const adminEventUpdateSchema = z
  .object(adminEventFields)
  .partial()
  .superRefine(validateEventDates);

export const communityContentSchema = z.object({
  body: z.string().trim().min(2).max(3000),
});

export const communityReportSchema = z
  .object({
    postId: z.string().trim().min(1).optional(),
    commentId: z.string().trim().min(1).optional(),
    reason: z.string().trim().min(10).max(1000),
  })
  .refine((data) => Boolean(data.postId) !== Boolean(data.commentId), {
    message: "Report exactly one post or comment.",
  });

export const communityModerationSchema = z.object({
  reportId: z.string().trim().min(1),
  targetType: z.enum(["post", "comment"]),
  targetId: z.string().trim().min(1),
  action: z.enum(["remove", "dismiss"]),
});
