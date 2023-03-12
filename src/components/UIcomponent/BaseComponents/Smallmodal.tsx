import React, { useState } from 'react'
import AgeVerificationImg from '../../../assets/img/Age-verification-img.png'
import Image from 'next/image';

function Smallmodal() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <input type="checkbox" checked={checked} id="my-modal-6" onChange={(e)=> setChecked(false)} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle backdrop-blur-sm bg-white/5">
       
        <div className="card w-96 bg-base-100 shadow-2xl border border-default">
          <figure className="px-4 pt-4">
            <Image src={AgeVerificationImg} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="text-accent text-base-big font-bold">Welcome to our website</h2>
            <p className='text-base pb-2' >Please, Verify your age to enter!</p>
            <div className="card-actions justify-between w-full">
              <label htmlFor="my-modal-6" className="btn btn-primary transition ease-in-out delay-150 hover:scale-105 px-7">I am Over 18</label>
              <label htmlFor="my-modal-6" className="btn btn-outline btn-primary transition ease-in-out delay-150 hover:scale-105 px-7">I am Under 18</label>
            </div>
            <span className='text-overline font-normal pt-2 text-center'>
              <span>By entering this site you are agreering to the</span> 
              <span className='flex'>
                <span className='text-primary'>terms of use</span> and <span className='text-primary'>Privacy Policy</span>.
              </span>
            </span>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Smallmodal