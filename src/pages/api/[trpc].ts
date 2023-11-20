import { appRouter } from "@/router";
import { createNextApiHandler } from "@trpc/server/adapters/next";

export default createNextApiHandler({
  router: appRouter,
  onError: ({ path, error }) => console.error(path, error),
});
