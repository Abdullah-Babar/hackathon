import Image from 'next/image'
import React from 'react'

const Unique = () => {
  return (
    <div className='bg-slate-300 h-[500px] mt-40'>
    <div className='flex justify-center '>
        <Image className='w-[400px] h-[450px] mt-5' src={"/Group 153.png"} width={133} height={133} alt=''/>
        <h1 className='text-4xl font-bold mt-14 w-[500px] leading-snug ml-12'>Unique Features Of leatest &
        Trending Products</h1>

    </div>

        <div className='ml-[640px] relative bottom-[320px]'>
           <p className='text-lg'><span className='text-6xl text-red-600 mr-2'>.</span>All frames constructed with hardwood solids and laminates</p>
           <p className='text-lg'><span className='text-6xl text-blue-600 mr-2'>.</span>Reinforced with double wood dowels, glue, screw - nails corner 
           blocks and</p> <p className='ml-[25px] text-lg'> machine nails</p>
           <p className='text-lg'><span className='text-6xl text-green-500 mr-2'>.</span>Arms, backs and seats are structurally reinforced</p>
        </div>

        <div className='flex'>

        <button className='bg-rose-600 text-white px-3 py-2 ml-[650px] relative bottom-[270px] rounded-lg w-[170px]'>Add To Cart</button>

        <div className='ml-5'>

        <p className='relative bottom-[270px]'>$32.00</p>
        <p className='relative bottom-[270px] font-semibold'>B&B Italian Sofa </p>
        </div>
        </div>

        </div>
  )
}

export default Unique