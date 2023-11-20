import { initTRPC } from "@trpc/server";

const t = initTRPC.create({
  errorFormatter({ shape }) {
    return shape;
  },
});

export const appRouter = t.router({
  route: t.procedure.query(() => "server value"),
});

export type AppRouter = typeof appRouter;
