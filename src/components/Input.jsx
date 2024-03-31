const input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="label-container">
      <input
        onChange={handleChange}
        type="radio"
        name={name}
        value={value}
        className="label-input"
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default input;
