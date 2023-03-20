import React from 'react';
import SmallModel from '../BaseComponents/SmallModel';
import SuccessFullShotIcon from '../../../assets/img/SuccessFullShotIcon.png'
import Image from 'next/image';

const SuccessFullShotModel: React.FC = () => {
  return (
    <SmallModel UniqueId='My-Successfull-shot-Modal'>
        <div className='px-4 pt-4 flex flex-col justify-center items-center'>
            <Image alt="Successfull-Shot" className='w-44' src={SuccessFullShotIcon} />
            <div className=''>
                <div className='text-subtitle font-bold'> Successful shot</div>
                <div className='text-center'>Today is your lucky day</div>
            </div>
            <div className='flex w-full my-5'>
                <button className="btn bg-orange-600 flex-1 mr-4 border-none">New roll x3</button>
                <button className="btn btn-outline FAQ-highlighter flex-1 ml-4 font-bold">Home</button>
            </div>
        </div>
    </SmallModel>
  );
};

export default SuccessFullShotModel;
