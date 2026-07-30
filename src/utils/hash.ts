import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

/**
 * Hash a plain text password.
 */
export async function hashPassword(password: string) {
  return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Compare a plain password with a hashed password.
 */
export async function comparePassword(
  password: string,
  hashedPassword: string
) {
  return bcrypt.compare(password, hashedPassword);
}