import Image from 'next/image'
import React from 'react';
import link1 from "../../../public/image/link1.png";
import link2 from "../../../public/image/link2.png";
import link3 from "../../../public/image/link3.png";
import link4 from "../../../public/image/link4.png";
import link5 from "../../../public/image/link5.png";
import link6 from "../../../public/image/link6.png";



const SecoundSection = () => {
    return (
        <div className='mt-32 flex flex-col justify-center'>
            <h1 className='text-4xl	text-center leading-[46.8px] font-light	'>
                Our customers include top brands across multiple industries
            </h1>
            <div className='flex flex-col justify-center pt-8'>
                <p className='text-center font-normal text-lg leading-8 text-zinc-500'>We serve hundreds of established brands including theme parks and attractions, botanical and zoological gardens, </p>
                <p className='text-center font-normal text-lg leading-8 text-zinc-500'>orchid retailers and hybridizers, carnivorous plant retailers, amphibian and reptile bedding suppliers, and more.</p>
            </div>

            <div className='flex gap-5 mt-[67px] justify-center'>
                <button>
                    <Image
                        alt="iamge"
                        src={link1}
                    />
                </button>
                <button>
                    <Image
                        alt="iamge"
                        src={link2}
                    />
                </button>
                <button>
                    <Image
                        alt="iamge"
                        src={link3}
                    />
                </button>
                <button>
                    <Image
                        alt="iamge"
                        src={link4}
                    />
                </button>
                <button>
                    <Image
                        alt="iamge"
                        src={link5}
                    />
                </button>
                <button>
                    <Image
                        alt="iamge"
                        src={link6}
                    />
                </button>


            </div>
            <div className='flex justify-center mt-16'>
                <p className='text-lg leading-7 text-center font-normal'>
                If you buy in bulk, <span className='text-green-600'>get our price list here</span>. Otherwise, <span className='text-green-600'>let us point you toward some outstanding retailers.</span>
                </p>
            </div>
        </div>
    )
}

export default SecoundSection