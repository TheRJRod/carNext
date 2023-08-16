'use client'
import Image from "next/image"
import Link from "next/link"


const Car1Details = () => {
  return (
    <>
    
    <div className="relative">
      <div className="backdrop-blur-md bg-black/50 h-1/3 w-1/3 absolute top-36 px-20 flex flex-col gap-4 justify-center">
      <h1 className="text-6xl text-yellow-500">2023 Bugatti</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
    <Link href='/car1'><button className="border border-white rounded-full py-2 px-4 text-xl self-start hover:bg-yellow-500">Order Now</button></Link>
      </div>
      <Image className="mx-auto" src={require('@/app/images/bugatti2.png')} width={1300} height={1300} alt='Bugatti' />
      <div className="backdrop-blur-md bg-black/50  w-full absolute bottom-0 h-56 flex justify-around items-center">
        <div>
          <p className="text-xl">Fuel Economy</p>
          <p className="text-xl"><span className="text-6xl text-yellow-500">12</span>MPG</p>
        </div>
        <div>
          <p className="text-xl">Power Output</p>
          <p className="text-xl"><span className="text-6xl text-yellow-500">1480</span>HP</p>
        </div>
        <div>
          <p className="text-xl">Engine Size</p>
          <p className="text-xl"><span className="text-6xl text-yellow-500">487.8</span>CU-IN</p>
        </div>
        <div>
          <p className="text-xl">Latest Model</p>
          <p className="text-xl"><span className="text-6xl text-yellow-500">2023</span>SS</p>
        </div>
      </div>
      
    </div>
    
    </>
  )
}

export default Car1Details