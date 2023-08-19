'use client'
import Image from "next/image"



const Car1Details = () => {
  return (
    <>
    
    <div className="relative pt-20 md:pt-0 ">
      <div className="backdrop-blue-none bg-none md:backdrop-blur-md md:bg-black/50 h-full w-full md:w-1/3 absolute left-0 -bottom-52 md:bottom-0 px-6 md:px-20 flex justify-center">
        <div className="flex flex-col gap-4 justify-center  ">
        <h1 className=" text-2xl lg:text-3xl xl:text-5xl text-yellow-500">2023 Bugatti</h1>
      <p className="hidden md:flex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
    <button className="border border-white rounded-full py-2 px-4 text-lg md:text-xl self-center md:self-start hover:bg-yellow-500">Order Now</button>
        </div>
      </div>
      <Image className="mx-auto " src={require('@/app/images/bugatti2.png')} width={1300} height={1300} alt='Bugatti' />
      <div className="backdrop-blur-md bg-black/50  w-full fixed bottom-0 h-56 grid grid-cols-2 lg:grid-cols-4 justify-items-center items-center
      ">
       
        <div className="-ml-0 md:-ml-20 lg:-ml-0 ">
          <p className="text-md md:text-xl">Fuel Economy</p>
          <p className="text-md md:text-xl"><span className="text-2xl md:text-6xl text-yellow-500">12</span>MPG</p>
        </div>
        <div>
          <p className="text-md md:text-xl">Power Output</p>
          <p className="text-md md:text-xl"><span className="text-2xl md:text-6xl text-yellow-500">1480</span>HP</p>
        </div>
        <div>
          <p className="text-md md:text-xl">Engine Size</p>
          <p className="text-md md:text-xl"><span className="text-2xl md:text-6xl text-yellow-500">487.8</span>CU-IN</p>
        </div>
        <div>
          <p className="text-md md:text-xl">Latest Model</p>
          <p className="text-md md:text-xl"><span className="text-2xl md:text-6xl text-yellow-500">2023</span>SS</p>
        </div>
        </div>
      </div>
      
   
    
    </>
  )
}

export default Car1Details