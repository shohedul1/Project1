'use client';
import Image from 'next/image';
import React from 'react';
import backImage from '../../../public/image/close-up-delicate-orchid copy 1.png';
import ProductImage from "../../../public/image/Prouct.png";
import Button from '../Button/Button';

const FirstSection = () => {
    return (
        <div className='w-full max-w-[1780px] h-full min-h-[800px] rounded-md bg-customColor relative md:overflow-hidden'>
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    alt="background image"
                    src={backImage}
                    className="rotate-14 w-full h-full"
                />
            </div>

            <div className="absolute inset-0 pt-6 flex justify-center ">
                <p className="text-lime-600 text-center font-normal text-xl leading-6	">
                    We’re known for dependability, service, and the best sphagnum moss, orchid bark, and tree fern fiber on the market!
                </p>
            </div>

            {/* Text Overlay */}
            <div className='flex  flex-col md:flex-row justify-center absolute inset-0 text-white mb-20'>
                <div className='mt-[215px] ml-[150px] mr-[87px]  '>
                    <div className='flex flex-col gap-[60px] w-[730px] md:h-[443px] relative'>
                        <div className='w-full'>
                            <p className='text-[40px] w-[730px] text-white font-light leading-[52px]'>
                                Acadian Supply is the EXCLUSIVE U.S. wholesale distributor of {" "}
                                <span className='font-semibold'>
                                    premium
                                    New Zealand sphagnum moss, orchid bark, and tree fern fiber.
                                </span>
                            </p>
                        </div>
                        <div className='w-full'>
                            <p className='text-xl font-normal leading-8'>
                                Our premium sphagnum moss, orchid bark, and tree fern fiber is used for a wide variety of applications from growing orchids and canivorous plants to amphibian and reptile bedding to specialty applications for aroids, topiaries, and more.
                            </p>
                        </div>
                        <div className='flex gap-5'>
                            <Button
                                text='Where to Buy'
                                onClick={() => { }}
                                type={"button"}
                                className='text-lg font-normal bg-pink-400	 '

                            />
                            <Button
                                text='Buying in bulk? Get our price list'
                                onClick={() => { }}
                                type={"button"}
                                className='text-lg font-normal text-green-600 border border-green-600	 '

                            />
                        </div>
                    </div>
                </div>
                <div className='mr-[68px] mt-[174px] relative  '>

                    <Image
                        alt="background image"
                        src={ProductImage}
                        className=" w-full h-full"
                    />


                </div>

            </div>
        </div>
        

    );
}

export default FirstSection;

