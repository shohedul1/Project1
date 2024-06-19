'use client';
import Image from 'next/image';
import React from 'react';
import backGround from "../../../public/image/close-up-delicate-orchid copy 1.png";
import Button from '../Button/Button';
import ProductImage from "../../../public/image/Prouct.png"

const FirstSection = () => {
    return (
        <div className='relative  w-full h-full bg-customColor rounded-md overflow-hidden'>
            <Image
                alt='image'
                src={backGround}
                objectFit='cover'
                className='w-full h-full hidden md:block'
            />

            <div className="absolute inset-0 ">
                <div className='pt-6 flex justify-center '>
                    <p className="text-lime-600 font-normal text-center text-xl leading-">
                        We’re known for dependability, service, and the best sphagnum moss, orchid bark, and tree fern fiber on the market!
                    </p>
                </div>
                <div className='flex flex-col md:flex-row gap-[87px]'>
                    <div className='flex-1 mt-[140px] ml-[150px] '>
                        <div className='flex flex-col gap-[60px] w-[730px] h-[443px] '>
                            <p className='text-white text-[40px] leading-[52px] font-light	'>
                                Acadian Supply is the EXCLUSIVE U.S. wholesale distributor of {""}
                                <span className='font-semibold leading-[52px] text-[40px]'>
                                    premium
                                    New Zealand sphagnum moss, orchid bark, and tree fern fiber.
                                </span>
                            </p>
                            <p className='font-normal text-[20px] leading-8 text-white'>
                                Our premium sphagnum moss, orchid bark, and tree fern fiber is used for a wide variety of applications from growing orchids and canivorous plants to amphibian and reptile bedding to specialty applications for aroids, topiaries, and more.
                            </p>
                            <div className='flex  gap-5'>
                                <Button
                                    type='button'
                                    text='Where to Buy'
                                    onClick={() => { }}
                                    className='text-white bg-pink-400'
                                />
                                <Button
                                    type='button'
                                    text='Buying in bulk? Get our price list'
                                    onClick={() => { }}
                                    className='text-green-600 border border-green-600'
                                />
                            </div>
                        </div>

                    </div>
                    <div className='flex-1 mr-[68px] mt-[99px]'>

                        <Image
                            alt='image'
                            src={ProductImage}
                            className='w-[745px] h-[521px] mr-[68px]'
                        />

                    </div>

                </div>
            </div>


        </div>
    )
}

export default FirstSection;
