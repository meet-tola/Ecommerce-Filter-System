import Input from "../components/Input";

const Price = ({ handleChange }) => {
  console.log(handleChange);
  return (
    <div className="md:mt-4">
      <h2 className="text-[16px] md:text-[20px] font-bold mb-3">Price</h2>

      <div>
        <label className="label-container">
          <input
            className="label-input"
            onChange={handleChange}
            type="radio"
            value=""
            name="test2"
          />
          <span className="checkmark"></span> All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - $50"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
