import React, { useCallback, useState } from 'react'
import { SelctArrowDown, SelctTokeninfo, SolanaIcon, TetherIcon } from '../../assets/img/Icons/Icons';
import SelectCoinFlipTokenModal from '../UIcomponent/SelectCoinFlipTokenModal';
import SelectToken from '../UIcomponent/SelectToken';
import { toggleTokenSelectorModel } from '../../redux/reducer/uicontrols';
import { useDispatch, useSelector } from 'react-redux';
import TokenHandler from '../UIcomponent/BaseComponents/TokenHandler';

type Props = {}

function SelectFlipToken({}: Props) {
    const dispatch = useDispatch();
    const OpenTokenSelectionModel = useCallback(() => dispatch(toggleTokenSelectorModel()), [])
    const selectorTokenSelectionModelState = useSelector((state:any) => state.uiControlsReducer)

    
    return (
      <div className="flex flex-col gap-4 mt-4 md:mt-0" >
        <div className="border-base-300 flex items-center justify-between rounded-2xl border py-5 px-6 hover:bg-black hover:text-white" onClick={OpenTokenSelectionModel}>
          <div className='flex items-center'>
            <TokenHandler />
          </div>
          <SelctArrowDown className='spin-animetion'  bgcolor_hash='none' color_hash='#fff' size='52' />
        </div>
        <div className={`max-h-96 rounded-2xl transition-all mb-14 ${!selectorTokenSelectionModelState.tokenSelectorModel && "hidden"}`}>
            <SelectToken />
        </div>
        <div className={`max-h-96 rounded-2xl transition-all mb-14 ${selectorTokenSelectionModelState.selectedTokenData == "" && "hidden"}`}>
            <SelectCoinFlipTokenModal />
        </div>
      </div>
    );
}

export default React.memo(SelectFlipToken)