import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import ThemProvider from "../context/ThemeContext";
import RecentTxnsProvider from "../context/RecentTxnsContext";
import ToastProvider from "../context/ToastContext";
import store from "../redux/store";
import { Provider } from "react-redux"
import '@solana/wallet-adapter-react-ui/styles.css';
import WalletConnectionProvider from "../context/WalletConnectionProvider";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <WalletConnectionProvider>
        <Provider store={store}>
          <ThemProvider>
            <RecentTxnsProvider>
              <ToastProvider>
                <Component {...pageProps} />
              </ToastProvider>
            </RecentTxnsProvider>
          </ThemProvider>
        </Provider>
      </WalletConnectionProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
