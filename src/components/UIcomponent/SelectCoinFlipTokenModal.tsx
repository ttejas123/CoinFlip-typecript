import React, { ChangeEvent, RefObject, useContext, useEffect, useRef, useState } from 'react'
import GredientBorder from './BaseComponents/GredientBorder'
import { SelectFlipToken, SelectTokenCount, SelectTokenCountIn } from '../../assets/img/Icons/Icons'
import CoinFace from '../../assets/img/Coin_Face.svg'
import CoinCross from '../../assets/img/Coin_Cross.svg'
import Image from 'next/image'
import { ThemeContext } from '../../context/ThemeContext'
import { RecentTxnsContext } from '../../context/RecentTxnsContext'
import TokenHandler from './BaseComponents/TokenHandler'
import { useSelector } from 'react-redux'

function SelectCoinFlipTokenModal() {
  const [numberOfSol, setNumberOfSol] = useState<number>(0);
  const [switchTwoX, setSwitchTwoX] = useState<boolean>(false);
  const [hide, sethide] = useState<boolean>(false); 
  const selectedTokenType = useSelector((state:any) => state.uiControlsReducer)
  const theme = useContext(ThemeContext);
  const RegisterNewTxnContext = useContext(RecentTxnsContext);
  
  const SwitchtoXmodeValue = (val: number) => {
    return switchTwoX ? val * 2 : val;
  }

  const onChangeOfNUmberOfSol = (event:ChangeEvent<HTMLInputElement>):void => {
      setNumberOfSol(event.target.valueAsNumber);
  }

  const onRegisterTxn = ():void => {
      RegisterNewTxnContext.RegisterNewTxn({sol: numberOfSol})
      setNumberOfSol(0);
  }

  const X_times_of_origin_value_lessThan_one = (val:number, times:number):number => {
      return val + (val * times);
  }

  const trade_value_show_or_hide = ():string => {
      const value =  numberOfSol.toFixed(2);
      if(hide) {
        return "*".repeat(4);
      }
      return ""+value;
  }

  const increaseSolanaByXTime = (X_times: number):void => {
      setNumberOfSol((pre)=> {
        if(X_times < 1) return X_times_of_origin_value_lessThan_one(pre, X_times);
        else return pre * X_times;
      })
  }

  return (
    <div>
        <div className="flex items-center justify-center hover:scale-105" >
                <GredientBorder height='h-24' tokentype={selectedTokenType.selectedTokenData}>
                    <SelectFlipToken  />

                    <div className='w-full absolute h-full top-0 left-0 rounded-2xl p-5'> 
                        {/* <input onChange={onChangeOfNUmberOfSol} type="number" value={numberOfSol} placeholder="Type here" className={`input input-bordered border-2 bg-zinc-300 input-group-xs hover:border-gray-200 h-9 w-full text-black`} /> */}
                        <div className='w-full flex items-center justify-between mt-5 '>
                            <div className='flex items-center'>
                                <TokenHandler size={30} />
                            </div>
                            <div className='flex items-center relative cursor-pointer' onClick={()=> {
                              sethide((pre)=> !pre);
                            }}>
                                <SelectTokenCount size='44' /> 
                                <div className='w-3 h-10 absolute flex justify-center items-center left-3.5 top-1'> 
                                  <SelectTokenCountIn size='25' color={theme.theme} />
                                </div> 
                                <div className={`absolute w-[2px] h-full left-5 bg-accent rotate-45 transition-all ease-in-out delay-150 ${!hide && "opacity-0"}`}></div>
                                <div className='text-subtitle text-accent ml-4'>
                                  {trade_value_show_or_hide()}
                                </div>
                            </div>
                        </div>
                    </div>
                </GredientBorder>
        </div>

        <div className='w-full h-full border border-base-300 mt-4 p-5 rounded-2xl text-base-200'>
              <div className='uppercase switchModeCoinFlipButtons rounded-lg text-overline font-bold text-center p-2 hover:scale-95 cursor-pointer transition-all' onClick={()=> setSwitchTwoX((pre:boolean) => !pre)}> Switch x{switchTwoX ? "1" : "2"} Mode </div>
              <div className='grid grid-cols-4 gap-y-2 w-full justify-between mt-4'> 
                <div className='btn-token-increase font-bold cursor-pointer hover:scale-90 transition-all py-4 mx-1 text-center rounded-xl' onClick={()=> setNumberOfSol(SwitchtoXmodeValue(0.1))}>{SwitchtoXmodeValue(0.1)}</div>
                <div className='btn-token-increase font-bold cursor-pointer hover:scale-90 transition-all py-4 mx-1 text-center rounded-xl' onClick={()=> setNumberOfSol(SwitchtoXmodeValue(0.25))}  >{SwitchtoXmodeValue(0.25)}</div>
                <div className='btn-token-increase font-bold cursor-pointer hover:scale-90 transition-all py-4 mx-1 text-center rounded-xl' onClick={()=> setNumberOfSol(SwitchtoXmodeValue(0.5))}  >{SwitchtoXmodeValue(0.5)}</div>
                <div className='btn-token-increase font-bold cursor-pointer hover:scale-90 transition-all py-4 mx-1 text-center rounded-xl' onClick={()=> setNumberOfSol(SwitchtoXmodeValue(1))}  >{SwitchtoXmodeValue(1)}</div>
                <div className='btn-token-increase font-bold cursor-pointer hover:scale-90 transition-all py-4 mx-1 text-center rounded-xl' onClick={()=> setNumberOfSol(SwitchtoXmodeValue(2))}>{SwitchtoXmodeValue(2)}</div>
                <div className='btn-token-increase font-bold cursor-pointer hover:scale-90 transition-all py-4 mx-1 text-center rounded-xl' onClick={()=> setNumberOfSol(SwitchtoXmodeValue(3))}  >{SwitchtoXmodeValue(3)}</div>
                <div className='btn-token-increase font-bold cursor-pointer hover:scale-90 transition-all py-4 mx-1 text-center rounded-xl' onClick={()=> setNumberOfSol(SwitchtoXmodeValue(4))}  >{SwitchtoXmodeValue(4)}</div>
                <div className='btn-token-increase font-bold cursor-pointer hover:scale-90 transition-all py-4 mx-1 text-center rounded-xl' onClick={()=> setNumberOfSol(SwitchtoXmodeValue(5))}  >{SwitchtoXmodeValue(5)}</div>
              </div>
              <div className='w-full grid grid-cols-2 mt-4 px-1'>
                <div className='switchModeCoinFlipButtons flex py-3 mr-2 justify-center font-bold rounded-xl items-center cursor-pointer hover:scale-95'
                  onClick={onRegisterTxn}
                ><Image
                    src={CoinFace}
                    alt="Coinface"
                    className="h-7 w-7 rounded-full mr-2"
                  /> Coin Face</div>
                <div className='switchModeCoinFlipButtons flex py-3 ml-2 justify-center font-bold rounded-xl items-center cursor-pointer hover:scale-95'
                  onClick={onRegisterTxn}
                ><Image
                    src={CoinCross}
                    alt="CoinCross"
                    className="h-7 w-7 rounded-full mr-2"
                  /> Coin Cross</div>
              </div>
        </div>
    </div>
  )
}

export default React.memo(SelectCoinFlipTokenModal)