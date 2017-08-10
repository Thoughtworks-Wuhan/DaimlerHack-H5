const defaultState = {
  carType: "奔驰GLA级 2015款 GLA 200 时尚型",
  gearType: "手动",
  cars: [
    { title: "奔驰GLA级 2015款 GLA 200 时尚型" },
    { title: "马自达CX-5 2015款 2.0L 手动两驱舒适型" },
    { title: "本田XR-V 2015款 1.8L VTi CVT豪华版" },
    { title: "奥迪Q5 2013款 40 TFSI 技术型" },
    { title: "保时捷Macan 2014款 Macan 2.0T" }
  ],
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
