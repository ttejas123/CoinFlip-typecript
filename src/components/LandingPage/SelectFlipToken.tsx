import React, { useState } from 'react'
import { SelctArrowDown, SelctTokeninfo } from '../../assets/img/Icons/Icons';
import SelectCoinFlipTokenModal from '../UIcomponent/SelectCoinFlipTokenModal';

type Props = {}

function SelectFlipToken({}: Props) {
    const [selected, setSelected] = useState(false);
    return (
      <div className="flex flex-col gap-4" >
        <div className="border-default flex items-center justify-between rounded-2xl border py-5 px-6" onClick={()=> setSelected((pre) => !pre)}>
          <div className='flex items-center'>
            <div className='mr-2 text-accent'>Select a token</div>
            <SelctTokeninfo size='16' />
          </div>
          <SelctArrowDown bgcolor_hash='none' color_hash='#fff' size='52' />
        </div>
        <div className={`border-default max-h-96 rounded-2xl ${!selected && "hidden"}`}>
            <SelectCoinFlipTokenModal />
        </div>
      </div>
    );
}

export default SelectFlipToken