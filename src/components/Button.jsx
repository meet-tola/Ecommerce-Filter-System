const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      className="px-4 py-3 lg:px-5 lg:py-3 border-2 mr-2 mt-4 font-medium text-[14px] lg:text-[16px] bg-white border-[#ccc] hover:bg-slate-100 z-[1] pointer-events-auto"
      onClick={onClickHandler}
      value={value}
    >
      {title}
    </button>
  );
};

export default Button;
