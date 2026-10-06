import jwt from "jsonwebtoken";

export function getJwtSecret() {
  const secret = process.env.JWT_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error("JWT_SECRET must be configured with at least 32 characters.");
  }

  return secret;
}

export interface JWTPayload {
  userId: string;
  email: string;
  username: string;
  role: string;
  sessionVersion: number;
}

export function signToken(payload: JWTPayload) {
  return jwt.sign(payload, getJwtSecret(), {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, getJwtSecret()) as JWTPayload;
}
