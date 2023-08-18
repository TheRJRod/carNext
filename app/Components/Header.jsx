import Image from 'next/image'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-OxfordBlue '>
      <nav className='flex items-center justify-around py-10 z-10'>
       <Link className='z-10' href='/'> <Image src={require('../images/r2logo.png')} width={100} height={100} alt='Logo' /></Link>
        <div className='flex text-2xl gap-2 text-white z-10'>
        <a href='https://www.linkedin.com/in/therjrod/' target='_blank'><FaLinkedin className='cursor-pointer hover:text-yellow-500'/> </a> 
        <a href='https://github.com/TheRJRod/' target='_blank'><FaGithubSquare className='cursor-pointer hover:text-yellow-500'/></a>
        </div>
      </nav>
        
    </div>
  )
}

export default Header