const FilterFreeInput = ({ handleChangeFreeInput, name }) => {
  return (
    <div>
      <label>AGE</label>
      <input onChange={handleChangeFreeInput} name={name} />
    </div>
  );
};

export default FilterFreeInput;
