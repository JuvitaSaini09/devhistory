import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users table with a unique index on tokenIdentifier
  users: defineTable({
    tokenIdentifier: v.string(), // Unique identifier from Clerk or auth provider
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_token", ["tokenIdentifier"]),

  // list of companies till add [can be filteres by userId and date range,isCurrent]
  //each user is related to multiple companies company
  companies: defineTable({
    userId: v.string(),
    userName: v.string(),
    joinedAt: v.string(),
    leftAt: v.optional(v.string()),
    isCurrent: v.boolean(),
    createdAt: v.number(),
  }),

  // list of work entries for each company
  work_entries: defineTable({
    userId: v.string(),
    companyId: v.string(),
    fromDate: v.string(), // ISO string
    toDate: v.string(), // ISO string
    rawDescription: v.string(),
    skills: v.optional(v.array(v.string())),
    aiTasks: v.optional(v.array(v.string())), // Extracted from Gemini
    finalDescription: v.optional(v.string()), // If user prefers AI rewrite
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  //Generate with help of Gemini API and and store , show in the bullet points
  summaries: defineTable({
    userId: v.string(),
    companyId: v.string(),
    summary: v.string(),
    generatedAt: v.number(),
    duration: v.optional(v.number()), // duration of jon in that company
    isCurrent: v.boolean(), // if the summary is for current job
  }),
});
