import { connect } from "react-redux";
import BranchDetails from "../components/BranchDetails";

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
}

// Remove Admin here

export default connect(mapStateToProps)(BranchDetails)