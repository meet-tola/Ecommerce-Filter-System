import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ handleInputChange }) => {
  return (
    <nav className="flex border-b-2 fixed w-full bg-white border-[#f3f3f3] px-4 sm:px-6 py-3 sm:py-4 justify-between items-center z-[9999]">
      <div className="flex items-center">
        <h1 className="text-lg mr-3 sm:text-xl font-bold">LetShop</h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          onChange={handleInputChange}
          className="px-3 py-3 mr-0 lg:mr-5 outline-none bg-gray-100 sm:w-64 lg:w-[20rem]"
          placeholder="Search shoes"
        />
        <a href="#" className="ml-3">
          <FiHeart className="w-6 h-6" />
        </a>
        <a href="#" className="ml-3 hidden md:block">
          <AiOutlineShoppingCart className="w-6 h-6" />
        </a>
        <a href="#" className="ml-3 hidden md:block">
          <AiOutlineUserAdd className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
