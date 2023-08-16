'use client'
import React from 'react'
import Image from 'next/image'
import {motion, AnimatePresence} from 'framer-motion'
import Link from 'next/link'

const Car2 = () => {
  return (
    
    <>
    <AnimatePresence mode='wait'>
      <motion.div className='flex justify-end items-center gap-x-10 pt-20'>
      <div className="flex flex-col  gap-y-4">
      <h1 className="text-6xl text-white">The car <br/> made for <span className="text-yellow-500">SPEED</span></h1>
      <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
      <Link href='/car2/car2details'>
      <button className="border border-white text-white rounded-full py-2 px-4 text-xl self-start hover:bg-yellow-500">View options</button></Link>
      </div>
      <Image src={require('../images/redLambo2.png')} width={1100} height={1100} alt='Lambo' />
      <motion.div className='slide-in' initial={{scaleY: 0}} animate={{scaleY:0}} exit={{scaleY:1}} transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}>

        </motion.div>
        <motion.div className='slide-out' initial={{scaleY: 1}} animate={{scaleY:0}} exit={{scaleY:0}} transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}>

        </motion.div>
      </motion.div>
      </AnimatePresence>
      </>
      
  )
}

export default Car2