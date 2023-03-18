import React, { ReactNode, createContext, useState } from "react";

type txn = {
    id?: number
    sol: number,
    alternet?: boolean,
    wallet?: string,
    win?: boolean,
    url?: string
}

type recentTxnProvidersProps = {
    children: ReactNode
}

type providerValueProps = {
    RecentTxns: txn[]
    RegisterNewTxn: (props: txn) => void
}

export const RecentTxnsContext = createContext<providerValueProps>({
    RecentTxns: [],
    RegisterNewTxn: (props: txn) => {}
});

const RecentTxnsProvider = (recenttxnproviderprops: recentTxnProvidersProps) => {
    const [RecentTxns, setRecentTxns] = useState<txn[]>([]);

    const RegisterNewTxn = (props:txn):void => {
        setRecentTxns((pre: txn[]) : txn[] =>{ 
            return [
                {
                    id: Date.now(),
                    sol: props.sol,
                    alternet: pre.length % 2 == 0,
                    url: "XYZ",
                    wallet: "r8pwQWmVB1zmPEwDyHuu7mVKyxXiAqJvKupsK25hTC5",
                    win: ((pre.length -1) % 3) == 0,
                },
                ...pre
            ]
        })
    }  

    return (
        <RecentTxnsContext.Provider 
            value={{
                RecentTxns,
                RegisterNewTxn
            }}
        >
            {recenttxnproviderprops.children}
        </RecentTxnsContext.Provider>
    )
}

export default RecentTxnsProvider