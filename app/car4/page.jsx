'use client'
import ParticlesContainer from '../Components/Particles'
import React from 'react'
import CarCard from '../Components/CarCard'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const bugatti = require('app/images/bugatti2.png')
const orangeLambo = require('app/images/orangeLambo.png')
const redLambo = require('app/images/redLambo.png')
const whiteLambo = require('app/images/whiteLambo.png')
const bmw = require('app/images/bmw2.png')

const carData = [
  { 
    id:1,
    car: 'Red BMW',
    image: bmw,
    link: '/car3/car3details'
  },
  {
    id:2,
    car: 'Black Bugatti',
    image: bugatti,
    link: '/car1details'
  },
  {
    id:3,
    car: 'Black Bugatti SS',
    image: bugatti,
    link: '/car1details'
  },
  {
    id:4,
    car: 'Orange Lambo',
    image: orangeLambo,
    link: '/car2/car2details'
  },
  {
    id:5,
    car: 'Red Lambo',
    image: redLambo,
    link: '/car2/car2details'
  },
  {
    id:6,
    car: 'White Lambo',
    image: whiteLambo,
    link: '/car2/car2details'
  },
]

function Car4() {

  const [search, setSearch] = useState('')

  return (
    <>
    <AnimatePresence mode='wait'>
      <motion.form className='flex justify-center flex-col items-center gap-y-10 pt-10  bg-OxfordBlue'>
        <input onChange={(e) => setSearch(e.target.value)} placeholder='Search Cars..' className='text-xl lg:text-5xl rounded-full px-8  z-10 w-1/2 '/>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 z-10 pb-20 md:pb-0'>
          
          {carData.filter((item) =>{
            return search.toLowerCase() === '' ? item : item.car.toLowerCase().includes(search)
          } ).map((car) =>  (
            <CarCard  page= {car.link} key={car.id} car={car.car} image={car.image} />
          ))}
          </div>
            <ParticlesContainer width='w-full' />
          <motion.div className='slide-in z-20' initial={{scaleY: 0}} animate={{scaleY:0}} exit={{scaleY:1}} transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}>

        </motion.div>
        <motion.div className='slide-out z-20' initial={{scaleY: 1}} animate={{scaleY:0}} exit={{scaleY:0}} transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}>

        </motion.div>
       
      </motion.form>
      </AnimatePresence>
      </>
  )
}

export default Car4