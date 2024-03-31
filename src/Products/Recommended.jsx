import Button from "../components/Button";

const Recommended = ({ handleClick, handleChange }) => {
  const options = ["Most Popular", "Most Expensive"];

  return (
    <div className="ml-5 lg:ml-[18rem] pt-[120px] lg:pt-20">
      <h2 className="my-5 text-[20px] font-bold mb-1">Recommended</h2>
      <div className="flex justify-between flex-wrap mr-[30px] items-end">
        <div className="flex flex-wrap">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>

        <div>
          <select
            onChange={handleChange}
            className="py-2 px-4 border border-gray-300 rounded-lg mt-4 mr-4 cursor-pointer opacity-[0.9] "
          >
            <option value="">
              Sort by
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
