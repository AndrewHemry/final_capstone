import { connect } from "react-redux";
import CompanyEmployees from "../components/CompanyEmployees";

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(CompanyEmployees)