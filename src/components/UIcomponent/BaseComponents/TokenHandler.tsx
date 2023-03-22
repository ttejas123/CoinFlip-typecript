import React from 'react'
import { useSelector } from 'react-redux'
import { SelctTokeninfo, SolanaIcon, TetherIcon } from '../../../assets/img/Icons/Icons'

type TokenHandlerProps = {
    size?:number
}

function TokenHandler(props:TokenHandlerProps) {
    
    const selectorTokenSelectionModelState = useSelector((state:any) => state.uiControlsReducer)
    const checkIfTokenIsSelected = () => {
        if(selectorTokenSelectionModelState.selectedTokenData == "eth"){
            return (
              <><SolanaIcon size={`${props.size ? props.size : 36}`} /> <div className='ml-3 text-base font-extrabold text-accent'>SOLANA</div></>
            )
        }

        if(selectorTokenSelectionModelState.selectedTokenData == "t#") {
            return(
              <><TetherIcon size={`${props.size ? props.size : 36}`} /> <div className='ml-3 text-base font-extrabold text-accent'>TETHER</div></>
            )
        }

        return (
          <>
            <div className='mr-2 text-accent'>Select a token</div>
            <SelctTokeninfo size='16' />
          </>
        )
    }
  return (
    <>{checkIfTokenIsSelected()}</>
  )
}

export default React.memo(TokenHandler)