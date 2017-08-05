const defaultState = {
  carType: "奔驰GLA级 2015款 GLA 200 时尚型",
  cars: [
    { title: "奔驰GLA级 2015款 GLA 200 时尚型" },
    { title: "马自达CX-5 2015款 2.0L 手动两驱舒适型" }
  ],
  year: "",
  month: "",
  insuranceYear: "",
  insuranceMonth: "",
  roadHaul: ""
};

const hack = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CAR_TYPE":
      return {
        ...state,
        carType: action.value
      };
    case "SET_YEAR":
      return {
        ...state,
        year: action.value
      };
    case "SET_MONTH":
      return {
        ...state,
        month: action.value
      };
    case "SET_INSURANCE_YEAR":
      return {
        ...state,
        insuranceYear: action.value
      };
    case "SET_INSURANCE_MONTH":
      return {
        ...state,
        insuranceMonth: action.value
      };
    case "SET_ROAD_HAUL":
      return {
        ...state,
        roadHaul: action.value
      };
    default:
      return state;
  }
};

export default hack;
