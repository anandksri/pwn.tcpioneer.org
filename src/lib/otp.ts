import { createHmac, randomInt } from "node:crypto";

import { getJwtSecret } from "@/lib/jwt";

export function generateOTP() {
  return randomInt(100000, 1000000).toString();
}

export function hashOTP(userId: string, type: string, code: string) {
  return createHmac("sha256", getJwtSecret())
    .update(`${userId}:${type}:${code}`)
    .digest("hex");
}
