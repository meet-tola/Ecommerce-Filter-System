import Categories from "./Categories";
import Price from "./Price";
import Colors from "./Colors";
import { useState } from "react";

const Sidebar = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full lg:w-auto fixed h-full mt-[30px]">
      {/* Normal sidebar for larger screens */}
      <div className="lg:block w-[18%] hidden pt-5 mt-12 fixed h-full border-r-2 z-[3] overflow-y-auto">
        
        <div className="flex items-start flex-col ml-10">
          <Categories handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </div>
      {/* Dropdown sidebar for smaller screens */}
      <div className="w-full fixed lg:hidden md:mt-2 z-[999] bg-gray-800">
        <div>
        <button
          className="w-full py-4 px-6 mt-10 text-white text-left flex justify-between items-center"
          onClick={toggleDropdown}
        >
          <span className="font-bold">Categories</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform transition-transform ${
              isOpen ? "-rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
          </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-white border-r-2 border-gray-300`}
        >
          <div className="p-5 flex items-start justify-between gap-2 overflow-x-auto">
            <Categories handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Colors handleChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
