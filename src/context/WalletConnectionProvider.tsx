import React, { useMemo, ReactNode } from 'react';

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

interface WalletConnectProviderProps {
  children: ReactNode;
}

function WalletConnectProvider(props: WalletConnectProviderProps) {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => {
    if (network === WalletAdapterNetwork.Devnet) {
      return 'https://young-long-road.solana-devnet.discover.quiknode.pro/d4ccfbf62598809cb83cb537d70b803800e14c76/';
    }
    return clusterApiUrl(network);
  }, [network]);

  const wallets = useMemo(() => {
    return [new PhantomWalletAdapter()];
  }, []);
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          {props.children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default WalletConnectProvider;
