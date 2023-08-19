'use client'
import Image from 'next/image'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'
import ParticlesContainer from './Components/Particles'

export default function Home() {
  return (
      <>
      <AnimatePresence  mode='wait'>
      
      <motion.div className='flex flex-col px-20 gap-x-0 gap-y-20 md:gap-y-0 text-[14px] md:text-[16px] xl:flex-row justify-center xl:gap-x-32 pt-10 md:pt-32 items-center '>
      <div className="flex flex-col  gap-y-4">
      <h1 className="text-4xl md:text-6xl text-white">YOUR CAR <br/> MADE BY <span className="text-yellow-500">THE FUTURE</span></h1>
      <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
    <Link href='/car1details'><button className="border border-white text-white rounded-full py-2 px-4 text-xl self-start hover:bg-yellow-500">View latest model</button></Link>
      </div>
      <Image className='z-10 scale-150 md:scale-100' src={require('./images/bugatti.png')} width={800} height={800} alt='bugatti' />
      <ParticlesContainer/>
      <motion.div className='slide-in z-20' initial={{scaleY: 0}} animate={{scaleY:0}} exit={{scaleY:1}} transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}>

        </motion.div>
        <motion.div className='slide-out z-20' initial={{scaleY: 1}} animate={{scaleY:0}} exit={{scaleY:0}} transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}>

        </motion.div>
      </motion.div>
      </AnimatePresence>
      </>
  )
}
