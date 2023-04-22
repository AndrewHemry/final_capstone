import { connect } from "react-redux";
import BranchPicker from "../components/BranchPicker";

const mapStateToProps = (state) => {
    return {
        current_company: state.current_company,
        branches: state.branches
    }
}

export default connect(mapStateToProps)(BranchPicker)