import { connect } from "react-redux";
import AddEmployee from "../components/AddEmployee";
import { addEmployee } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        addEmployee: (employee) => dispatch(addEmployee(employee))
    }
}

export default connect(null, mapDispatchToProps)(AddEmployee)