import { NextResponse } from "next/server";

/** Return a safe public error while keeping server logs free of raw exception data. */
export function apiError(context: string, message = "Internal server error.") {
  console.error(`[api:${context}] request failed`);

  return NextResponse.json(
    { success: false, message },
    { status: 500 },
  );
}
