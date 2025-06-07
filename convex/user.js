import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";

export const createUserIfNotExists = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called storeUser without authentication present");
    }

    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    if (existingUser !== null) {
      // If we've seen this identity before but the name has changed, patch the value.
      if (existingUser.name !== identity.name) {
        await ctx.db.patch(existingUser._id, { name: identity.name });
      }
      return existingUser._id;
    }
    // If it's a new identity, create a new `User`.
    return await ctx.db.insert("users", {
      tokenIdentifier: identity.tokenIdentifier,
      name: identity.name ?? "Anonymous",
      email: identity.email ?? "",
      createdAt: Date.now(),
    });
  },
});

// export const getCurrentUser = query({
//   handler: async (ctx) => {
//     const identity = await ctx.auth.getUserIdentity();
//     if (!identity) {
//       throw new Error("Not authenticated");
//     }

//     // Check if we've already stored this identity before.
//     const user = await ctx.db
//       .query("users")
//       .withIndex("by_token", (q) =>
//         q.eq("tokenIdentifier", identity.tokenIdentifier)
//       )
//       .first();
//     if (user === null) {
//       throw new Error("User not found");
//     }
//     return user;
//   },
// });
