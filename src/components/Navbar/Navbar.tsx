import Image from 'next/image'
import Link from 'next/link'
import home from "../../../public/image/home.png"

const Navbar = () => {
    return (
        <div className='py-4 flex justify-between items-center sticky top-0 bg-white z-40'>
            <div>
                <Link href={"/"}>
                    <Image
                        alt='iamge'
                        priority
                        property='true'
                        src={home}
                        className='w-[175px] h-[97px]'
                    />
                </Link>
            </div>
            <div className='flex gap-20'>
                <li className='list-none font-normal text-[22px]'>
                    <Link href={"/"}>
                        Products
                    </Link>
                </li>
                <li className='list-none font-normal text-[22px]'>
                    <Link href={"/"}>
                        Applications
                    </Link>
                </li>
                <li className='list-none font-normal text-[22px]'>
                    <Link href={"/"}>
                        Where to Buy
                    </Link>
                </li>
                <li className='list-none font-normal text-[22px]'>
                    <Link href={"/"}>
                        Contact
                    </Link>
                </li>


            </div>
            <div>
                search
            </div>

        </div>
    )
}

export default Navbar