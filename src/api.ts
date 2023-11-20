import { AppRouter } from "@/router";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.API_URL) return `https://${process.env.API_URL}`; // SSR should use api url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}

export const api = createTRPCNext<AppRouter>({
  config: () => ({
    links: [
      httpBatchLink({
        url: `${getBaseUrl()}/api`,
      }),
    ],
  }),
  ssr: false,
});
