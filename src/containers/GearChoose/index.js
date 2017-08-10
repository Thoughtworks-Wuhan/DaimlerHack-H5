import { connect } from "react-redux";

import { setGearType } from "../../actions";
import Choose from "../../components/Choose";

const mapStateToProps = state => {
  return {
    selectedOption: state.gearType,
    options: ['手动','自动'],
    title: '请选择变速箱类型：'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select: gearType => {
      dispatch(setGearType(gearType));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Choose);
