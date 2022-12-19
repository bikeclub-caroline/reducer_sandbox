const FilterCheckboxes = ({ optionsArr, handleChangeTickBox }) => {
  return (
    <div>
      <div onChange={handleChangeTickBox}>
        {optionsArr.map((opt) => (
          <div>
            <label for={opt}>{opt}</label>
            <input type="checkbox" key={opt} value={opt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCheckboxes;
