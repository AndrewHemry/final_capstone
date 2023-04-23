import { connect } from "react-redux";
import AddBranch from "../components/AddBranch";
import { addBranch } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        addBranch: (branch) => dispatch(addBranch(branch))
    }
}

export default connect(null, mapDispatchToProps)(AddBranch)