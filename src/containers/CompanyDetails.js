import { connect } from "react-redux";
import CompanyDetails from "../components/CompanyDetails";

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
        admins: state.admins
    }
}

// Remove Admin here

export default connect(mapStateToProps)(CompanyDetails)