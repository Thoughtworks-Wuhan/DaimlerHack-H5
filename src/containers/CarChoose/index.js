import { connect } from "react-redux";

import { addCarType } from "../../actions";
import Choose from "../../components/Choose";

const mapStateToProps = state => {
  const carTypes = state.cars.map(car => car.title);
  return {
    selectedOption: state.carType,
    options: carTypes,
    title: '请选择车辆类型：'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select: carType => {
      dispatch(addCarType(carType));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Choose);
