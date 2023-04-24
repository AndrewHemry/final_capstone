import { connect } from "react-redux";
import BranchDetails from "../components/BranchDetails";
import { removeEmployee } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeEmployee: (key) => dispatch(removeEmployee(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BranchDetails)