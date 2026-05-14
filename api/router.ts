import { authRouter } from "./auth-router";
import { herbRouter } from "./herb-router";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  herb: herbRouter,
});

export type AppRouter = typeof appRouter;
