import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div>
      <h1 className='text-center text-4xl font-bold mt-8'>Featured Products</h1>
      <div className='flex justify-center items-center gap-10 mt-10 text-5xl'>

        <Image className='w-64 h-80' src={"/Featured product1.png"} width={133} height={133} alt=''/>
        <Image className='w-64 h-80' src={"/Featured product.png"} width={133} height={133} alt=''/>
        <Image className='w-64 h-80' src={"/Component 3.png"} width={133} height={133} alt=''/>
        <Image className='w-64 h-80' src={"/Component 4.png"} width={133} height={133} alt=''/>
      </div>

  
      <div className='ml-[650px] mt-8'>
      <Image className='w-12 h-2' src={"/Group 169.png"} width={133} height={133} alt=''/>
        
      </div>
    </div>
  )
}

export default Featured