import { api } from "@/api";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>tRPC Rerpoduction</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Suspense fallback={<>Fetching...</>}>
          <Component />
        </Suspense>
      </main>
    </>
  );
}

function Component() {
  api.route.useSuspenseQuery(undefined, {
    onSettled: (data) => {
      if (typeof window === "undefined") console.log("SSR:", data);
      else console.log("CSR:", data);
    },
  });

  return <div>Complete</div>;
}
