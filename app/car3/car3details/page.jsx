import Image from "next/image"
import {BsSpeedometer} from 'react-icons/bs'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {AiOutlineClockCircle} from 'react-icons/ai'

const Car3Details = () => {
  return (
    <div className="flex flex-col items-center justify-center relative pt-24">
      <h1 className="text-white text-2xl md:text-9xl absolute top-28 lg:top-32 text-center ">DRIVING FAST IN STYLE </h1>
      <Image  src={require('app/images/bmw2.png')} width={1100} height={1100} alt='Lambo' />
      <button className="border border-white text-white rounded-full py-2 px-4 text-xl self-center hover:bg-yellow-500">Order Now</button>
      <div className="backdrop-blur-md bg-black/50 text-white fixed lg:absolute  w-full lg:w-[25rem] left-0 bottom-0 lg:bottom-10 text-2xl lg:text-4xl flex flex-col items-center lg:items-end p-8 gap-y-8">
      <div className="flex items-center gap-x-4">
      <p> 0-60 in <span className="text-yellow-500">4.1sec</span> </p>
      <AiOutlineClockCircle className="text-yellow-500"/>
      </div>
      <div className="flex items-center gap-x-4">
      <p> Best style <span className="text-yellow-500">2023</span> </p>
      <BsSpeedometer className="text-yellow-500"/>
      </div>
      <div className="flex items-center gap-x-4">
      <p> Starting at <span className="text-yellow-500">100K</span> </p>
      <RiMoneyDollarCircleFill className="text-yellow-500"/>
      </div>
      </div>
    </div>
  )
}

export default Car3Details