import Image from 'next/image'
import React from 'react'

const Picture = () => {
  return (
    <div>
         <h1 className='text-center text-4xl font-bold mt-8'>Latest Blog</h1>
         <div className='flex justify-center items-center gap-10 mt-10 text-5xl'>
        <Image className='w-80 h-80' src={"/Leatest blog.png"} width={133} height={133} alt=''/>
        <Image className='w-80 h-80' src={"/Leatest blog (1).png"} width={133} height={133} alt=''/>
        <Image className='w-80 h-80' src={"/Leatest blog (2).png"} width={133} height={133} alt=''/>
        </div>
    </div>
  )
}

export default Picture