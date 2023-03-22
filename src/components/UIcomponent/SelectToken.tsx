import React, { useCallback } from 'react'
import { SolanaIcon, TetherIcon } from '../../assets/img/Icons/Icons'
import { useDispatch } from 'react-redux';
import { selectTokenData, toggleTokenSelectorModel } from '../../redux/reducer/uicontrols';

function SelectToken() {
  const dispatch = useDispatch();
  const SelectTokenOnclickHandeler = useCallback((type: "eth"|"t#") => {
      dispatch(selectTokenData(type))
      dispatch(toggleTokenSelectorModel())
  }, [])

  return (
    <div className='w-full h-full border border-base-300  p-5 rounded-2xl text-base-200'>
              <div className='uppercase bg-base-300 rounded-lg text-overline font-extrabold p-5 my-1 hover:scale-95 cursor-pointer transition-all flex items-center justify-left ' onClick={()=> SelectTokenOnclickHandeler("eth")}> 
                <SolanaIcon size='36' /> <div className='ml-3 text-base font-extrabold text-accent'>SOLANA</div>
              </div>
              <div className='uppercase bg-base-300 rounded-lg text-overline font-bold text-center p-5 my-1 hover:scale-95 cursor-pointer transition-all flex items-center justify-left' onClick={()=> SelectTokenOnclickHandeler("t#")}> 
                <TetherIcon size='36' /> <div className='ml-3 text-base font-extrabold text-accent'>TETHER</div>
              </div>
        </div>
  )
}

export default SelectToken