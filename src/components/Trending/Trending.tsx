import Image from 'next/image'
import React from 'react'

const Trending = () => {
  return (
    <div>
         <h1 className='text-center text-4xl font-bold mt-8'>Trending Products</h1>
      <div className='flex justify-center items-center gap-7 mt-10 text-5xl'>

        <Image className='w-64 h-80' src={"/Trending products.png"} width={133} height={133} alt=''/>
        <Image className='w-64 h-80' src={"/Trending products (1).png"} width={133} height={133} alt=''/>
        <Image className='w-64 h-80' src={"/Trending products (2).png"} width={133} height={133} alt=''/>
        <Image className='w-64 h-80' src={"/Trending products (3).png"} width={133} height={133} alt=''/>
      </div>

      <div className='flex justify-center'>
        <div><Image className='h-[300px] w-[400px]' src={"/Group 154.png"} width={200} height={200} alt=''/></div>
        <div><Image className='h-[300px] w-[400px]' src={"/Group 155.png"} width={200} height={200} alt=''/></div>
        
        <div className='mt-4 gap-10'>
            <Image className='w-[250px] h-[70px] mt-3' src={"/Trnding products list.png"} width={100} height={70} alt=''/>
            <Image className='w-[250px] h-[70px] mt-3' src={"/Trnding products list (1).png"} width={100} height={70} alt=''/>
            <Image className='w-[250px] h-[70px] mt-3' src={"/Trnding products list (2).png"} width={100} height={70} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Trending