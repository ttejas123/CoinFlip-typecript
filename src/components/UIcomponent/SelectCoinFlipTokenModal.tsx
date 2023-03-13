import React from 'react'
import GredientBorder from './BaseComponents/GredientBorder'
import { SelectFlipToken, SelectTokenCount } from '../../assets/img/Icons/Icons'

function SelectCoinFlipTokenModal() {
  return (
    <div>
        <div className="flex items-center justify-center hover:scale-105">
                <GredientBorder tokentype='solana'>
                    <SelectFlipToken />

                    <div className='w-full h-full absolute top-0 left-0 rounded-2xl p-5 '> 
                        <input type="number" placeholder="Type here" className="input input-bordered border-2 bg-zinc-300 input-group-xs hover:border-gray-200 h-9 w-full text-accent "  />
                        <div className='w-full flex items-center justify-between mt-5'>
                            <div className='text-base-bold'>SOLANA</div>
                            <div className='flex items-center'><SelectTokenCount size='44' /> <div className='text-subtitle text-accent ml-4'>4.6784</div></div>
                        </div>
                    </div>
                </GredientBorder>
        </div>
        <div>
            

        </div>
    </div>
  )
}

export default SelectCoinFlipTokenModal