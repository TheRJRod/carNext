import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CarCard = ({car = 'Red BMW', image = require('app/images/bmw2.png') , page = '/car1details'}) => {
  return (
    <div className={`bg-white transition-all flex flex-col justify-around items-center shadow-lg shadow-black h-60 w-60 md:h-72 md:w-72 p-6 rounded-md hover:scale-110`}>
        <h3 className='text-2xl'>{car}</h3>
        <Image  src={image} width={1000} height={1000} alt='Lambo' />
       <Link href={page} > <button className="border border-black text-black rounded-full py-2 px-4 text-xl self-center hover:bg-yellow-500">Order Now</button> </Link>
    </div>
  )
}

export default CarCard