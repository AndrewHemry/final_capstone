import { connect } from "react-redux";
import CompanyDetails from "../components/CompanyDetails";

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(CompanyDetails)