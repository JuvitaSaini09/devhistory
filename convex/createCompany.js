// import { v } from "convex/values";
// import { internal } from "./_generated/api";
// import { mutation } from "./_generated/server";

// export const createComapny = mutation({
//   args: {
//     name: v.string(),
//     joinedAt: v.string(),
//     leftAt: v.optional(v.string()),
//     isCurrent: v.boolean(),
//   },
//   handler: async ({ctx, args }) => {
//     const currentUser = await ctx.runQuery(internal.user.getCurrentUser);

//     return await ctx.db.insert("companies", {
//       userId: currentUser._id,
//       userName: currentUser.name,
//       joinedAt: args.joinedAt,
//       leftAt: args.leftAt,
//       isCurrent: args.isCurrent,
//       createdAt: Date.now(),
//     });
//   },
// });
