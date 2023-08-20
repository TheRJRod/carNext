'use client'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './Components/Header'
import Navigation from './Components/Navigation'


const poppins = Poppins({weight:'400', subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <body className={`${poppins.className} overflow-x-hidden bg-OxfordBlue`} >
        
        <Header/>
       <main className='bg-OxfordBlue h-screen		'>
        <Navigation/>

        {children}
       </main>
        
        </body>
        
    </html>
    
  )
}
