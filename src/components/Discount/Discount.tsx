import Image from "next/image"


const Discount = () => {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold mt-8'>Discount Item</h1>
        <div className="flex justify-center items-center">

        <Image className="w-[1100px] h-[500px] ml-[100px]" src={"/discount sofa.png"} width={533} height={533} alt=""/>
        </div>
    </div>
  )
}

export default Discount