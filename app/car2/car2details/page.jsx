'use client'
import { useState } from 'react'
import Image from 'next/image'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'


const lamboSpecs = [
   {
    name: 'Red Lamborghini',
    year: 2023,
    speed: 200,
    engine: 6.5,
    price: 500
  },
   {
    name: 'White Lamborghini',
    year: 2019,
    speed: 175,
    engine: 4.5,
    price: 300
  },
   {
    name: 'Orange Lamborghini',
    year: 2021,
    speed: 190,
    engine: 5.5,
    price: 450
  }
]


const Car2Details = () => {

  const [sliderCounter, setSliderCounter] = useState(0)

  const handleSliderAdd = () => {
      setSliderCounter(sliderCounter + 1)
  }

  const handleSliderSub = () => {
    setSliderCounter(sliderCounter - 1)
}


  return (
    <>
    <div className=' h-screen pt-14'>
      <div className='text-center pb-44 md:pb-60 text-2xl md:text-6xl'>
      <h1 className='text-yellow-500 font-bold' >{lamboSpecs[sliderCounter].name}</h1>
      <div className='flex flex-col md:flex-row text-2xl items-center text-center gap-4 justify-center pt-4'>
      <p className='text-white'>{lamboSpecs[sliderCounter].year} best in class</p>
        <div className='flex text-yellow-500'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
      </div>
      </div>
      <div className='flex justify-center items-center '>
      <BsFillArrowLeftCircleFill onClick={() => handleSliderSub()} className={` ${sliderCounter === 0 ? 'hidden' : ''} text-white	 text-5xl cursor-pointer hover:text-yellow-500 absolute top-[26rem] md:top-[20rem] left-1/3 `}/>
      <Image className={`absolute transition-all duration-1000 scale-75 md:scale-100	 ${sliderCounter === 0 ? 'opacity-100' : 'opacity-0'}`} src={require('app/images/redLambo.png')} width={800} height={800} alt='Lambo' />
      <Image className={`absolute transition-all duration-1000	scale-75 md:scale-100 ${sliderCounter === 1 ? 'opacity-100' : 'opacity-0'}`} src={require('app/images/whiteLambo.png')} width={800} height={800} alt='Lambo' />
      <Image className={`absolute transition-all duration-1000	scale-75 md:scale-100 ${sliderCounter === 2 ? 'opacity-100' : 'opacity-0'}`} src={require('app/images/orangeLambo.png')} width={800} height={800} alt='Lambo' />
    <BsFillArrowRightCircleFill onClick={() => handleSliderAdd()} className={`${sliderCounter >= 2 ? 'hidden' : ''} text-5xl cursor-pointer text-white	 hover:text-yellow-500 absolute right-1/3 top-[26rem] md:top-[20rem]`}/>
     </div>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 absolute  -bottom-28 md:bottom-20  w-screen text-white text-center text-xl'>
        <div>
          <p><span className='text-5xl text-yellow-500'>{lamboSpecs[sliderCounter].speed}</span>MPH</p>
          <p>Top Speed</p>
        </div>
        <div >
          <p><span className='text-5xl text-yellow-500'>{lamboSpecs[sliderCounter].engine}</span>L</p>
          <p>V-12 Engine</p>
        </div>
        <div >
          <p><span className='text-5xl text-yellow-500'>${lamboSpecs[sliderCounter].price}K</span>USD</p>
          <p>Starting at</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Car2Details