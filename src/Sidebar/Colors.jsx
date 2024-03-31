import Input from "../components/Input";

const Colors = ({handleChange}) => {
  return (
    <div className="md:mt-4">
      <h2 className="text-[16px] md:text-[20px] font-bold mb-3">Colors</h2>

      <div>
      <label className="label-container">
          <input
            className="label-input"
            onChange={handleChange}
            type="radio"
            value=""
            name="test1"
          />
          <span className="checkmark all"></span> All
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
        <label className="label-container">
          <input
            className="label-input"
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span className="checkmark"></span> white
        </label>
      </div>
    </div>
  );
};

export default Colors;
