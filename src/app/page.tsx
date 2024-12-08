import Header from "@/components/Header/Header"
import First from "@/components/First/First"
import Main from "@/components/Main/Main"
import Featured from "@/components/Featured/Featured"
import Latest from "@/components/Latest/Latest"
import Shopex from "@/components/Shopex/Shopex"
import Unique from "@/components/Unique/Unique"
import Trending from "@/components/Trending/Trending"
import Discount from "@/components/Discount/Discount"
import Categories from "@/components/Categories/Categories"
import Picture from "@/components/Picture/Picture"
import Footer from "@/components/Footer/Footer"



const page = () => {
  return (
    <div>
      <First/>
      <Header/>
      <Main/>
      <Featured/>
      <Latest/>
      <Shopex/>
      <Unique/>
      <Trending/>
      <Discount/>
      <Categories/>
      <Picture/>
      <Footer/>
    </div>
  )
}

export default page