const defaultState = {
  carType: "奔驰"
};

const hack = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CAR_TYPE":
      return Object.assign({}, state, {
        carType: action.value
      });
    case "SET_YEAR":
      return Object.assign({}, state, {
        year: action.value
      });
    case "SET_MONTH":
      return Object.assign({}, state, {
        month: action.value
      });
    default:
      return state;
  }
};

export default hack;
