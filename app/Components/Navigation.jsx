import {PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill, PiNumberCircleFourFill } from 'react-icons/pi'
import {BsSearch} from 'react-icons/bs'
import Link from 'next/link'

const Navigation = () => {
  return (
    <>
    <div className='sticky bottom-20  md:absolute md:right-8 md:bottom-1/2 text-lg md:text-2xl flex flex-row md:flex-col gap-y-6 justify-around text-white bg-black rounded-none md:rounded-full px-2 py-6 z-10'>
     <Link href='/'> <PiNumberCircleOneFill className='cursor-pointer hover:text-yellow-500'/></Link>
     <Link href='/car2'><PiNumberCircleTwoFill className='cursor-pointer hover:text-yellow-500'/></Link>
     <Link href='/car3'><PiNumberCircleThreeFill className='cursor-pointer hover:text-yellow-500'/></Link>
     <Link href='/car4'><BsSearch className='cursor-pointer hover:text-yellow-500'/></Link>
    </div>
    </>
  )
}

export default Navigation