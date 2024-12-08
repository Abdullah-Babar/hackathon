import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <div>
         <h1 className='text-center text-4xl font-bold mt-8'>Top Categories</h1>
      <div className='flex justify-center items-center gap-10 mt-10 text-5xl'>

        <Image className='w-64 h-80' src={"/Top catagories.png"} width={133} height={133} alt=''/>
        <Image className='w-64 h-80' src={"/Top catagories (1).png"} width={133} height={133} alt=''/>
        <Image className='w-64 h-80' src={"/Top catagories (2).png"} width={133} height={133} alt=''/>
        <Image className='w-64 h-80' src={"/Top catagories (3).png"} width={133} height={133} alt=''/>
      </div>

      <div className="mt-7 flex justify-center">
  <Image src={"/dot.png"} width={50} height={50} alt=""/>
    </div>
    </div>
  )
}

export default Categories