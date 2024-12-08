import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <div className="flex ml-16 mt-8">
      <div><h1 className="font-bold text-2xl ml-20">Hekto</h1></div>
        

        <div>
            <ul className="flex gap-8 ml-[130px] mt-1">
                <select  className="text-rose-500 bg-white" name="" id="">
                  <option value="home">Home</option>
                </select>
                <li>Pages</li>
                <li>Product</li>
                <li>Blog</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
        </div>

        <div >
          <form  action="">

            <div className="ml-32 mt-1 border-2 h-8">

            <input type="search" name="search" id="search"/>
            </div>

          </form>
        </div>
            <div className="ml-[0px] mt-1 text-white bg-rose-600 p-2"><GoSearch /></div>
    </div>
  )
}

export default Header