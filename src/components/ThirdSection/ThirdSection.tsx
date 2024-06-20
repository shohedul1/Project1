import Image from 'next/image'
import React from 'react';
import product1 from "../../../public/image/produc1.png"

const ThirdSection = () => {
  return (
    <div className='mt-[132px] bg-black w-full h-full flex justify-start'>
        <div className='flex gap-[162px] justify-start'>
           
                <Image
                alt="image"
                src={product1}
                className='w-full h-full object-cover'
                />
            
            <div></div>
        </div>
        
    </div>
  )
}

export default ThirdSection