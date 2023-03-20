import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { CoinFlipLogoIcon } from "../../assets/img/Icons/Icons";
import coinAnim from "../../assets/img/coin-anim.gif";
import { formatWalletSmall } from "../../utils/WalletShort";
import { ThemeContext } from "../../context/ThemeContext";
import { RecentTxnsContext } from "../../context/RecentTxnsContext";
import { ToastContext } from "../../context/ToastContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleSuccessfullShotModel } from "../../redux/reducer/uicontrols";

type Props = {};
type ItemProps = {
    id?: number
    url?: string
    alternet?: boolean
    wallet?: string
    sol: number
    win?: boolean 
    index?: number 
}

const Item = (props: ItemProps) => {

 return (
  <>
    <div className="flex items-center">
      <Image
        src={coinAnim}
        alt="person"
        className="h-12 w-12 rounded-full"
      />
      
        <div className="text-base font-semibold flex ml-2">
            <div className="text-accent underline">{formatWalletSmall(props.wallet? props.wallet : "")}</div>
            <div className="ml-2 text-default">Flipped</div> 
            <div className="ml-2 FAQ-highlighter">{props.sol} SOL</div>
            <div className="ml-2 text-default">and</div>
            <div className={`ml-2 ${props.win ? "text-success" : "text-error"}`}>{props.win ? "double" : "loss"}</div>
        </div>
      
    </div>
    
    <div className="mr-2 text-right">
      a few second ago
    </div>
  </>
);
}

export default function RecentTxns({}: Props) {

  const RecentTxnContext = useContext(RecentTxnsContext);
  const theme = useContext(ThemeContext)
  const ToastContextInstance = useContext(ToastContext);
  const alternetColorAccordingtoTheme = (alternet:boolean) => {
    if(theme.theme == 'light'){
        return "bg-base-100"
    } 

    if(alternet) return "bg-base-100";

    return "bg-base-200"
  }

  useEffect(()=> {
    const timeout = setTimeout(() => {
      const newElement = document.querySelector(".new");
      if (newElement) {
        newElement.classList.remove("new");
      }
    }, 1000);
    return ()=> { 
      clearTimeout(timeout);
    }
  }, [RecentTxnContext.RecentTxns])

  return (
    <div className="flex flex-col gap-4">
      <div className="border-base-300 flex items-center justify-between rounded-2xl border py-5 px-6" onClick={()=> {
        ToastContextInstance.ShowToast("Hii My Name is Tejas");
      }}>
        <CoinFlipLogoIcon color={theme.theme} />
        <Image src={coinAnim} alt="coin" className="w-20" />
      </div>

      
      <div className={`border-base-300 max-h-96 overflow-y-scroll rounded-2xl border p-4 ${theme.theme == 'light' ? "scrollbar-style-light" : "scrollbar-style-dark"} scroll-smooth ${RecentTxnContext.RecentTxns.length == 0 && "hidden"}`}>
        {RecentTxnContext.RecentTxns.map((val, index) => {
            return (
              <div key={val.id} className={`mb-2 flex w-full items-center justify-between transition-all cursor-pointer hover:scale-95 rounded-2xl ${alternetColorAccordingtoTheme(val.alternet ? val.alternet : false)} p-4 shadow-lg ${index == 0 ? "new" : ""}`}><Item {...val}  /></div>
            )
        })}
      </div>
    </div>
  );
}
