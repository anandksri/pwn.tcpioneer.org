import assert from "node:assert/strict";
import { test } from "node:test";

import {
  adminEventCreateSchema,
  adminEventUpdateSchema,
  communityContentSchema,
  communityModerationSchema,
  communityReportSchema,
} from "../src/lib/validators.ts";

const validEvent = {
  title: "Community security workshop",
  description: "A practical workshop for the community.",
  category: "Workshop",
  startsAt: "2026-10-20T16:00:00Z",
  endsAt: "2026-10-20T18:00:00Z",
  location: "Online",
  registrationUrl: "https://example.com/register",
};

test("event validation parses UTC dates and allows an optional registration link", () => {
  const result = adminEventCreateSchema.safeParse(validEvent);
  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.startsAt.toISOString(), "2026-10-20T16:00:00.000Z");
    assert.equal(result.data.endsAt?.toISOString(), "2026-10-20T18:00:00.000Z");
  }

  assert.equal(
    adminEventCreateSchema.safeParse({
      ...validEvent,
      endsAt: null,
      registrationUrl: null,
    }).success,
    true,
  );
});

test("event validation rejects invalid time ranges and unsafe registration URLs", () => {
  assert.equal(
    adminEventCreateSchema.safeParse({
      ...validEvent,
      endsAt: "2026-10-20T15:59:00Z",
    }).success,
    false,
  );
  assert.equal(
    adminEventCreateSchema.safeParse({
      ...validEvent,
      registrationUrl: "javascript:alert(1)",
    }).success,
    false,
  );
});

test("event updates accept publication changes and reject malformed dates", () => {
  assert.equal(adminEventUpdateSchema.safeParse({ published: true }).success, true);
  assert.equal(
    adminEventUpdateSchema.safeParse({ startsAt: "not-a-date" }).success,
    false,
  );
});

test("community posts and comments enforce bounded non-empty content", () => {
  assert.equal(communityContentSchema.safeParse({ body: "A useful post" }).success, true);
  assert.equal(communityContentSchema.safeParse({ body: " " }).success, false);
  assert.equal(communityContentSchema.safeParse({ body: "x".repeat(3001) }).success, false);
});

test("community reports require exactly one target and a reason", () => {
  assert.equal(
    communityReportSchema.safeParse({
      postId: "post_1",
      reason: "This contains personal information.",
    }).success,
    true,
  );
  assert.equal(
    communityReportSchema.safeParse({
      postId: "post_1",
      commentId: "comment_1",
      reason: "This contains personal information.",
    }).success,
    false,
  );
  assert.equal(
    communityReportSchema.safeParse({
      commentId: "comment_1",
      reason: "spam",
    }).success,
    false,
  );
});

test("community moderation only accepts supported review actions", () => {
  assert.equal(
    communityModerationSchema.safeParse({
      reportId: "report_1",
      targetType: "post",
      targetId: "post_1",
      action: "remove",
    }).success,
    true,
  );
  assert.equal(
    communityModerationSchema.safeParse({
      reportId: "report_1",
      targetType: "post",
      targetId: "post_1",
      action: "ban",
    }).success,
    false,
  );
});
