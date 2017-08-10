const defaultState = {
  carType: "奔驰",
  gearType: "手动",
  cars: [
    { title: "奔驰", newPrice: 12, brandIndex: 4 },
    { title: "宝马", newPrice: 12, brandIndex: 3 },
    { title: "保时捷", newPrice: 12, brandIndex: 5 },
    { title: "奥迪", newPrice: 12, brandIndex: 1 },
    { title: "大众", newPrice: 12, brandIndex: 7 },
    { title: "丰田", newPrice: 12, brandIndex: 16 }
  ],
  gears: [{ title: "手动", value: 2 }, { title: "自动", value: 1 }],
  year: 0,
  month: 0,
  insuranceYear: 0,
  insuranceMonth: 0,
  roadHaul: 0
};

const hack = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CAR_TYPE":
      return {
        ...state,
        carType: action.value
      };
    case "SET_GEAR_TYPE":
      return {
        ...state,
        gearType: action.value
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
