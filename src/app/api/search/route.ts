import { NextResponse } from "next/server";

import { searchPublishedContent } from "@/lib/content";
import { apiError } from "@/utils/api-error";

export async function GET(request: Request) {
  try {
    const query = new URL(request.url).searchParams.get("q") ?? "";
    if (query.trim().length < 2) return NextResponse.json({ success: true, results: [] });

    const results = await searchPublishedContent(query.slice(0, 100));
    return NextResponse.json({ success: true, results });
  } catch {
    return apiError("search");
  }
}
