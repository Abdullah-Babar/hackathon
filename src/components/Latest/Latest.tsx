import Image from "next/image";

const Latest = () => {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold mt-8'>Latest Products</h1>

        <ul className='flex justify-center items-center gap-12 mt-8'>
            <li className='text-rose-600 underline underline-offset-2'>New Arrival</li>
            <li>Best Seller</li>
            <li>Featured</li>
            <li>Special Offer</li>
        </ul>

        <div className='flex justify-center items-center gap-16 mt-10 text-5xl'>
        <Image className='w-80 h-80' src={"/Component 9 (1).png"} width={133} height={133} alt=''/>
        <Image className='w-80 h-80' src={"/Leatest product.png"} width={133} height={133} alt=''/>
        <Image className='w-80 h-80' src={"/Component 8.png"} width={133} height={133} alt=''/>
        </div>

        <div className='flex justify-center items-center gap-16 mt-28 text-5xl'>
        <Image className='w-80 h-80' src={"/Component 10.png"} width={133} height={133} alt=''/>
        <Image className='w-80 h-80' src={"/Component 11.png"} width={133} height={133} alt=''/>
        <Image className='w-80 h-80' src={"/Component 12.png"} width={133} height={133} alt=''/>
        </div>
    </div>
  )
}

export default Latest