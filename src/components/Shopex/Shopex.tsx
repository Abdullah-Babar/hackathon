import Image from 'next/image'
import React from 'react'

const Shopex = () => {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold mt-12'>What Shopex Offer!</h1>

        <div className='flex justify-center items-center gap-10 mt-10'>

            <div className='mt-7 bg-white shadow-2xl h-56 w-60'>
                <Image className='h-20 w-28 ml-16' src={"/Group.png"} width={133} height={133} alt=''/>
                <h2 className='text-center mt-3 font-semibold'>24/7 Support</h2>
                <p className='text-center w-60 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quisquam.</p>
            </div>
            <div className='mt-7 bg-white shadow-2xl h-56 w-60'>
                <Image className='h-20 w-28 ml-16' src={"/cashback 1.png"} width={133} height={133} alt=''/>
                <h2 className='text-center mt-3 font-semibold'>24/7 Support</h2>
                <p className='text-center w-60 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quisquam.</p>
            </div>
            <div className='mt-7 bg-white shadow-2xl h-56 w-60'>
                <Image className='h-20 w-28 ml-16' src={"/premium.png"} width={133} height={133} alt=''/>
                <h2 className='text-center mt-3 font-semibold'>24/7 Support</h2>
                <p className='text-center w-60 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quisquam.</p>
            </div>
            <div className='mt-7 bg-white shadow-2xl h-56 w-60'>
                <Image className='h-20 w-28 ml-16' src={"/hour.png"} width={133} height={133} alt=''/>
                <h2 className='text-center mt-3 font-semibold'>24/7 Support</h2>
                <p className='text-center w-60 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quisquam.</p>
            </div>

      </div>
    </div>
  )
}

export default Shopex