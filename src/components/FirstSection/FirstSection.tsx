'use client';
import Image from 'next/image';
import React from 'react';
import backImage from '../../../public/image/close-up-delicate-orchid copy 1.png';
import ProductImage from '../../../public/image/Prouct.png';
import Button from '../Button/Button';

const FirstSection = () => {
    return (
        <div className="min-w-full h-[800px] bg-customColor rounded-md relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    alt="background image"
                    src={backImage}
                    layout="fill"
                    objectFit="cover"
                    className="rotate-14"
                />
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 pt-6 flex justify-center ">
                <p className="text-lime-600 text-center font-normal text-xl leading-6	">
                    We’re known for dependability, service, and the best sphagnum moss, orchid bark, and tree fern fiber on the market!
                </p>
            </div>

            {/* Content Section */}
            <div className='flex gap-[87px] absolute inset-0 justify-between'>
                <div className='pt-52 ml-[150px]'>
                    <div className='max-w-[730px] h-full text-white flex flex-col gap-[60px]'>
                        <h1 className='font-light leading-[52px] text-[40px]'>
                            Acadian Supply is the EXCLUSIVE U.S. wholesale distributor of {" "}
                            <span className='font-semibold'>
                                premium
                                New Zealand sphagnum moss, orchid bark, and tree fern fiber.
                            </span>
                        </h1>
                        <p className='font-normal text-xl leading-8'>
                            Our premium sphagnum moss, orchid bark, and tree fern fiber is used for a wide variety of applications from growing orchids and canivorous plants to amphibian and reptile bedding to specialty applications for aroids, topiaries, and more.
                        </p>
                        <div className='flex gap-5'>
                            <Button
                                className='bg-pink-400'
                                onClick={() => { }}
                                text='Where to Buy'
                            />
                            <Button
                                className='border border-green-600 text-green-600'
                                onClick={() => { }}
                                text='Buying in bulk? Get our price list'
                            />

                        </div>
                    </div>
                </div>

                <div className='pt-44 pr-[68px] pb-[105px] '>
                    <Image
                        alt='image'
                        src={ProductImage}
                        className='w-[745px] h-full'
                    />
                </div>
            </div>
        </div>

    );
}

export default FirstSection;
