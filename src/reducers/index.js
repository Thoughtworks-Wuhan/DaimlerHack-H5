const defaultState = {
  carType: "奔驰"
};

const hack = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CAR_TYPE":
      return Object.assign({}, state, {
        carType: action.value
      });
    default:
      return state;
  }
};

export default hack;
