import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";

const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="m-5 p-5 ml-1 border-2 rounded-lg border-[#ededed] cursor-pointer flex flex-col justify-between max-w-[20rem] lg:max-w-[15rem]">
      <div className="flex justify-center items-center h-58 lg:h-48 mb-4 overflow-hidden rounded-t-lg">
        <img src={img} alt={title} className="w-full h-auto" />
      </div>
      <div>
        <h3 className="font-bold text-[18px]">{title}</h3>
        <div className="mb-4 flex items-center">
          {star} {star} {star} {star}
          <span className="text-[14px] ml-3">{reviews}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[20px] font-bold">
            <del className="text-[16px] font-normal">{prevPrice}</del>{" "}
            {newPrice}
          </div>
          <div onClick={handleLike} className="cursor-pointer pointer-events-auto">
            {liked ? (
              <FaHeart className="text-[24px] md:text-[20px] text-red-500 transition-colors duration-300" />
            ) : (
              <FiHeart className="text-[#535353] text-[24px] md:text-[20px] transition-colors duration-300" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
