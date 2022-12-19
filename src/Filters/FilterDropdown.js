const FilterDropdown = ({ optionsArr, handleChange, name }) => {
  return (
    <div>
      <select onChange={handleChange} name={name}>
        {optionsArr.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
