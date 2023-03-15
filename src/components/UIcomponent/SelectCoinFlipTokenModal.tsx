import React from 'react'
import GredientBorder from './BaseComponents/GredientBorder'
import { SelectFlipToken, SelectTokenCount, SelectTokenCountIn } from '../../assets/img/Icons/Icons'
import CoinFace from '../../assets/img/Coin_Face.svg'
import CoinCross from '../../assets/img/Coin_Cross.svg'
import Image from 'next/image'

function SelectCoinFlipTokenModal() {
  return (
    <div>
        <div className="flex items-center justify-center hover:scale-105 ">
                <GredientBorder tokentype='solana'>
                    <SelectFlipToken />

                    <div className='w-full absolute h-full top-0 left-0 rounded-2xl p-5 '> 
                        <input type="number" placeholder="Type here" className="input input-bordered border-2 bg-zinc-300 input-group-xs hover:border-gray-200 h-9 w-full text-accent "  />
                        <div className='w-full flex items-center justify-between mt-5'>
                            <div className='text-base-bold'>SOLANA</div>
                            <div className='flex items-center relative'><SelectTokenCount size='44' /> <div className='w-3 h-10 absolute flex justify-center items-center left-3.5 top-1'> <SelectTokenCountIn size='25' /></div> <div className='text-subtitle text-accent ml-4'>4.6784</div></div>
                        </div>
                    </div>
                </GredientBorder>
        </div>

        <div className='w-full h-full border border-default mt-4 p-5 rounded-2xl text-base-100'>
              <div className='uppercase bg-accent rounded-lg text-overline font-bold text-center p-2 hover:scale-95 cursor-pointer transition-all'> Switch x2 Mode </div>
              <div className='grid grid-cols-4 w-full justify-between mt-4'> 
                <div className='text-primary-focus font-bold bg-red-100 cursor-pointer hover:scale-90 transition-all py-4 mx-1 text-center rounded-xl'>0.5</div>
                <div className='text-primary-focus font-bold bg-red-100 cursor-pointer hover:scale-90 transition-all py-4 mx-1 text-center rounded-xl'>2</div>
                <div className='text-primary-focus font-bold bg-red-100 cursor-pointer hover:scale-90 transition-all py-4 mx-1 text-center rounded-xl'>4</div>
                <div className='text-primary-focus font-bold bg-red-100 cursor-pointer hover:scale-90 transition-all py-4 mx-1 text-center rounded-xl'>6</div>
              </div>
              <div className='w-full grid grid-cols-2 mt-4 px-1'>
                <div className='bg-accent flex py-3 mr-2 justify-center font-bold rounded-xl items-center'><Image
                    src={CoinFace}
                    alt="person"
                    className="h-7 w-7 rounded-full mr-2"
                  /> Coin Face</div>
                <div className='bg-accent flex py-3 ml-2 justify-center font-bold rounded-xl items-center'><Image
                    src={CoinCross}
                    alt="person"
                    className="h-7 w-7 rounded-full mr-2"
                  /> Coin Cross</div>
              </div>
        </div>
    </div>
  )
}

export default SelectCoinFlipTokenModal