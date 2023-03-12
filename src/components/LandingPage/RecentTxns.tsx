import Image from "next/image";
import React, { useState } from "react";
import coinFlipLogo from "../../assets/img/coinflip-logo.png";
import coinAnim from "../../assets/img/coin-anim.gif";
import { formatWalletSmall } from "../../utils/WalletShort";

type Props = {};
type ItemProps = {
    url?: string
    wallet: string
    sol: number
    win: boolean  
}

const Item = (props: ItemProps) => {
 return (
  <div className="mb-2 flex w-full items-center justify-between rounded-2xl bg-white p-4 shadow-lg">
    
    <div className="flex items-center">
      <Image
        src={coinAnim}
        alt="person"
        className="h-12 w-12 rounded-full"
      />
      
        <div className="text-base font-semibold flex ml-2">
            <div className="text-accent underline">{formatWalletSmall(props.wallet)}</div>
            <div className="ml-2 text-default">Flipped</div> 
            <div className="ml-2 text-primary">{props.sol} SOL</div>
            <div className="ml-2 text-default">and</div>
            <div className={`ml-2 ${props.win ? "text-success" : "text-error"}`}>{props.win ? "double" : "loss"}</div>
        </div>
      
    </div>
    
    <div className="mr-2 text-right">
      a few second ago
    </div>
  </div>
);
}

export default function RecentTxns({}: Props) {

  const [List, setList] = useState(new Array(10).fill(0));

  return (
    <div className="flex flex-col gap-4">
      <div className="border-default flex items-center justify-between rounded-2xl border py-5 px-6">
        <Image src={coinFlipLogo} alt="coinflip" className="w-64" />
        <Image src={coinAnim} alt="coin" className="w-20" />
      </div>
      <div className="border-default max-h-96 overflow-y-scroll rounded-2xl border p-4 scrollbar-style">
        {List.map((val, index) => {
            const passingArg: ItemProps = {
              sol: (Math.floor(Math.random() * 10)),
              wallet: "r8pwQWmVB1zmPEwDyHuu7mVKyxXiAqJvKupsK25hTC5",
              win: Math.random() < 0.4,
              url: "xyz" 
            }
            return (
              <Item key={index} {...passingArg} />
            )
        })}
      </div>
    </div>
  );
}
