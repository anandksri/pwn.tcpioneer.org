import assert from "node:assert/strict";
import { test } from "node:test";

import {
  emailSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
} from "../src/lib/validators.ts";
import { getJwtSecret, signToken, verifyToken } from "../src/lib/jwt.ts";

process.env.JWT_SECRET ??= "test-secret-that-is-at-least-32-characters-long";

test("registration validation normalizes email and accepts a valid account", () => {
  const result = registerSchema.safeParse({
    username: "security_student",
    email: " Student@Example.com ",
    password: "strong-password",
    confirmPassword: "strong-password",
  });

  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.email, "student@example.com");
  }
});

test("registration rejects unsafe usernames and mismatched passwords", () => {
  const result = registerSchema.safeParse({
    username: "bad user!",
    email: "student@example.com",
    password: "strong-password",
    confirmPassword: "different-password",
  });

  assert.equal(result.success, false);
});

test("login validation rejects empty and oversized credentials", () => {
  assert.equal(loginSchema.safeParse({ identifier: "", password: "" }).success, false);
  assert.equal(
    loginSchema.safeParse({ identifier: "student", password: "valid-password" }).success,
    true,
  );
});

test("reset validation requires a six-digit OTP and a bounded password", () => {
  assert.equal(
    resetPasswordSchema.safeParse({
      email: "student@example.com",
      otp: "12345",
      password: "new-password",
    }).success,
    false,
  );
  assert.equal(
    resetPasswordSchema.safeParse({
      email: "student@example.com",
      otp: "123456",
      password: "new-password",
    }).success,
    true,
  );
});

test("email validation canonicalizes addresses", () => {
  const result = emailSchema.parse({ email: " User@Example.COM " });
  assert.equal(result.email, "user@example.com");
});

test("JWT session versions round-trip and are tamper-resistant", () => {
  assert.equal(getJwtSecret().length >= 32, true);

  const token = signToken({
    userId: "user_123",
    email: "student@example.com",
    username: "security_student",
    role: "USER",
    sessionVersion: 4,
  });
  const payload = verifyToken(token);

  assert.equal(payload.userId, "user_123");
  assert.equal(payload.sessionVersion, 4);
  assert.throws(() => verifyToken(`${token}tampered`));
});
