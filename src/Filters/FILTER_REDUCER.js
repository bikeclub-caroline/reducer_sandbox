export const FILTERS_INITIAL_STATE = {
  checkedBrands: "",
  checkedColors: "",
  checkedWheelSizes: "",
  selectedAge: "",
  checkedSizes: [],
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "GET_FILTER_VAL":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "GET_MULTI_VAL":
      return {
        ...state,
        checkedSizes: action.payload,
      };

    default:
      return state;
  }
};
