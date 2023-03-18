import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import ThemProvider from "../context/ThemeContext";
import RecentTxnsProvider from "../context/RecentTxnsContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemProvider>
        <RecentTxnsProvider>
          <Component {...pageProps} />
        </RecentTxnsProvider>
      </ThemProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
