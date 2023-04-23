import { connect } from "react-redux";
import Navigation from "../components/Navigation";

const mapStateToProps = (state) => {
    return {
        user: state.user,
        available_companies: state.available_companies,
        current_company: state.current_company,
        branches: state.branches,
        admins: state.admins,
        employees: state.employees
    }
}

export default connect(mapStateToProps)(Navigation)