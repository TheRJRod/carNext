'use client'
import Image from 'next/image'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'

export default function Home() {
  return (
      <>
      <AnimatePresence mode='wait'>
      <motion.div className='flex justify-end gap-x-32 pt-16 items-center'>
      <div className="flex flex-col  gap-y-4">
      <h1 className="text-6xl text-white">Your car <br/> made by <span className="text-yellow-500">THE FUTURE</span></h1>
      <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
    <Link href='/car1details'><button className="border border-white text-white rounded-full py-2 px-4 text-xl self-start hover:bg-yellow-500">View latest model</button></Link>
      </div>
      <Image src={require('./images/tesla.png')} width={1000} height={1000} alt='Logo' />
      <motion.div className='slide-in' initial={{scaleY: 0}} animate={{scaleY:0}} exit={{scaleY:1}} transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}>

        </motion.div>
        <motion.div className='slide-out' initial={{scaleY: 1}} animate={{scaleY:0}} exit={{scaleY:0}} transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}>

        </motion.div>
      </motion.div>
      </AnimatePresence>
      </>
  )
}
