const defaultState = {
  carType: "奔驰",
  year: "",
  month: "",
  roadHaul: ""
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

    case "SET_ROAD_HAUL":
      return Object.assign({}, state, {
        roadHaul: action.value
      });
    default:
      return state;
  }
};

export default hack;
