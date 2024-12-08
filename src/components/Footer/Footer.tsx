import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-100'>

        <div className='py-3 flex justify-evenly'>
            <div>
            <h1 className='text-2xl font-bold'>Hekto</h1>
<div className='flex mt-5'>
    
            <form action="">
                <input className='h-8 text-center' type="email" name="" id="" placeholder='Enter Email Address'  />
            </form>
            <button className='bg-rose-600 text-white px-3 py-1'>Sign Up</button>
</div>

            <p className='mt-7 font-normal'>Contact Info</p>
            <p className='mt-2 font-normal'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div>
            <h1 className='text-xl font-bold'>Categories</h1>
            <p className='mt-5 leading-relaxed'>Laptops & Computers  <br />
            Cameras & Photography  <br />
            Smart Phones & Tablets <br />
            Video Games & Consoles <br />
            Waterproof Headphones <br />
            </p>

            </div>
            <div>

            <h1 className='text-xl font-bold'>Customer Care</h1>
            <p className='mt-5 leading-relaxed'>
                My Account <br />
                Discount <br />
                Returns <br />
                Order History <br />
                Order Tracking <br />
            </p>
            </div>
            <div>
            <h1 className='text-xl font-bold'>Pages</h1>
                <p  className='mt-5 leading-relaxed'>
                    Blog <br />
                    Browse the Shop <br />
                    Category <br />
                    Pre-Built Pages <br />
                    Visual Composer Elements <br />
                    WooCommerce Pages <br />

                </p>
            </div>
        </div>

        <div className='flex bg-slate-200 py-3'>
            <p className='ml-40'>&copy;Webcy-All Rights Reserved</p>
            <Image className='ml-[500px] w-[100px] h-[30px]' src={"/Group 205.png"} width={133} height={100} alt=''/>
        </div>
        
    </div>
  )
}

export default Footer