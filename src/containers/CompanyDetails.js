import { connect } from "react-redux";
import CompanyDetails from "../components/CompanyDetails";
import { removeAdmin, toggleActiveStatusEmployee } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
        admins: state.admins
    }
}

// Remove Admin here
const mapDispatchToProps = (dispatch) => {
    return {
        removeAdmin: (admin) => dispatch(removeAdmin(admin)),
        toggleActiveStatusEmployee: (employee) => dispatch(toggleActiveStatusEmployee(employee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails)