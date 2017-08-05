import { connect } from "react-redux";

import { addCarType } from "../../actions";
import Choose from "../../components/Choose";

const mapStateToProps = state => {
  const carTypes = ["马自达CX-5 2015款 2.0L 手动两驱舒适型", "奔驰GLA级 2015款 GLA 200 时尚型"];
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
