'use client'
import {motion, AnimatePresence} from 'framer-motion'


export default function Car3Layout({ children }) {
  return (
    <>
    <AnimatePresence  mode='wait'>
        <motion.div >
        
       
        {children}
        <motion.div className='slide-in' initial={{scaleX: 0}} animate={{scaleX:0}} exit={{scaleX:1}} transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}>

        </motion.div>
        <motion.div className='slide-out' initial={{scaleX: 1}} animate={{scaleX:0}} exit={{scaleX:0}} transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}>

        </motion.div>
        
        </motion.div>
        </AnimatePresence>
        </>
 
   
  )
}
