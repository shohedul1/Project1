'use client';
import Image from 'next/image';
import React from 'react';
import backImage from '../../../public/image/close-up-delicate-orchid copy 1.png';
import ProductImage from '../../../public/image/Prouct.png';
import Button from '../Button/Button';

const FirstSection = () => {
    return (
        <div className="flex items-center px-4 md:px-10 lg:px-16 xl:px-20">
            <div className="max-w-[1700px] w-full h-[800px] bg-customColor flex justify-center items-center rounded-md relative overflow-hidden ">
                <Image
                    alt='image'
                    src={backImage}
                    className='w-full h-full'
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 pt-6 flex justify-center ">
                    <p className="text-lime-600 text-center font-normal text-xl leading-6	">
                        We’re known for dependability, service, and the best sphagnum moss, orchid bark, and tree fern fiber on the market!
                    </p>
                </div>

                <div className='absolute inset-0'>
                    <div className='flex justify-center gap-[87px]'>
                   
                        <div className='min-w-[738px] h-[443px] mt-[215px] ml-20  bg-white '>
                            hwllow
                        </div>
                        <div className='min-w-[745px] h-[443px] mt-[174px]  bg-white pr-[68px]'>
                            hwllow
                        </div>
                       

                    </div>

                </div>

            </div>
        </div>
    );
}

export default FirstSection;
