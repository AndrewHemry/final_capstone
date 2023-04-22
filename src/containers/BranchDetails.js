import { connect } from "react-redux";
import BranchDetails from "../components/BranchDetails";

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(BranchDetails)