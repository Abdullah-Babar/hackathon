import { IoMailOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const First = () => {
  return (
    <div className='flex bg-blue-700 text-slate-100 w-full h-10'>
        <div className='flex ml-40 p-2 font-bold mt-0'>
          <div className="font-bold text-xl mt-1"><IoMailOutline/></div>
        <div className="ml-4 mb-4">mhhasanul@gmail.com</div>

        <div className="ml-8 mt-1"><FaPhoneVolume/></div>
        <div className="ml-4 mt-[1px]">(1234)567890</div>


        <div className='flex ml-44 bg-blue-700'>

  <select className='text-slate-10 bg-blue-700' >
    <option value="english">English</option>
  </select>
  <select className='text-slate-10 ml-3 bg-blue-700' >
    <option value="english">USD</option>
  </select>

  <p  className='text-slate-10 ml-4 bg-blue-700'>Login</p>
  <div className="mt-1 ml-1"><CgProfile/></div>

  <p className='text-slate-10 ml-4 bg-blue-700' >Wishlist</p>
  <div className="mt-1 ml-2"><FaRegHeart /></div>

<div className="ml-10 mt-1 text-xl font-extrabold"><BsCart /></div>
  

        </div>
        </div>

    </div>
  )
}

export default First