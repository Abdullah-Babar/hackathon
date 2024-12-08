import Image from "next/image"
import { Button } from "../ui/button"


const Main = () => {
  return (
    <div>
      <div>

      
    <div className='bg-slate-100 h-[520px] flex w-full mt-3'>
      <Image className="h-64 w-80" src={"/image 32.png"} width={533} height={133} alt=""/>


<div className="mt-40">


      <p className="text-lg text-rose-600">Best Furniture For Your Castle...</p>
      <h1 className="text-4xl w-[450px] font-bold mt-2 leading-snug">New Furniture Collection Trends in 2020</h1>
      <p className=" text-lg w-[550px] mt-3 text-blue-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis recusandae,</p>


      </div>
      
      <Image className="w-[520px] h-[450px] mt-[50px] ml-[80px]" src={"/sofa.png"} width={233} height={233} alt=""/>
    </div>

<button className="p-3 absolute bottom-20 left-[270px] bg-rose-600 w-[170px] rounded">Shop Now</button>
<div className="bg-slate-100 absolute bottom-4 left-[600px]">
  <Image src={"/dot.png"} width={50} height={50} alt=""/>
</div>

</div>

    </div>
  )
}

export default Main