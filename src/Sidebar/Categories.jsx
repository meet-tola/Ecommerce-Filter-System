import Input from "../components/Input";

const Categories = ({ handleChange }) => {
  return (
    <div>
      <h2 className="text-[16px] md:text-[20px] font-bold mb-3">Category</h2>

      <div>
        <label className="label-container">
          <input
            className="label-input"
            onChange={handleChange}
            type="radio"
            value=""
            name="test"
          />
          <span className="checkmark"></span> All
        </label>

        <Input
          haandleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Categories;
