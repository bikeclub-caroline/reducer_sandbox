import { React, useReducer } from "react";
import FilterCheckboxes from "../Filters/FilterCheckboxes";
import FilterDropdown from "../Filters/FilterDropdown";
import FilterFreeInput from "../Filters/FilterFreeInput";
import { useState } from "react";
import {
  filterReducer,
  FILTERS_INITIAL_STATE,
} from "../Filters/FILTER_REDUCER";

const FiltersGrid = () => {
  const brands = ["Frog", "Strider", "BMX", "Woom"];
  const colors = ["blue", "red", "green", "purple"];
  const wheelSizes = ["120", "130", "140"];
  const sizes = ["S", "M", "L", "XL"];
  const [checkList, setCheckList] = useState([]);

  //   useEffect(() => {
  //     effect
  //     return () => {
  //         cleanup
  //     };
  //   }, [input]);

  const [state, dispatch] = useReducer(filterReducer, FILTERS_INITIAL_STATE);

  const getFilterVal = (e) => {
    dispatch({
      type: "GET_FILTER_VAL",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleChangeTickBox = (e) => {
    dispatch({
      type: "GET_MULTI_VAL",
      payload: e.target.checked
        ? [...state.checkedSizes, e.target.value]
        : [...state.checkedSizes.filter((elem) => elem !== e.target.value)],
    });
  };
  return (
    <>
      <div style={{ backgroundColor: "lightblue" }}>
        <FilterDropdown
          handleChange={getFilterVal}
          optionsArr={brands}
          name="checkedBrands"
        />
        <p> state of brand: {state.checkedBrands}</p>

        <FilterDropdown
          handleChange={getFilterVal}
          optionsArr={colors}
          name="checkedColors"
        />

        <p> state of color: {state.checkedColors}</p>

        <FilterDropdown
          handleChange={getFilterVal}
          optionsArr={wheelSizes}
          name="checkedWheelSizes"
        />

        <p> state of wheel size: {state.checkedWheelSizes}</p>

        <FilterFreeInput
          handleChangeFreeInput={getFilterVal}
          name="selectedAge"
        />

        <FilterCheckboxes
          handleChangeTickBox={handleChangeTickBox}
          optionsArr={sizes}
        />
      </div>
    </>
  );
};

export default FiltersGrid;
