import { connect } from "react-redux";
import AddAdmin from "../components/AddAdmin";
import { addAdmin } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        addAdmin: (admin) => dispatch(addAdmin(admin))
    }
}

export default connect(null, mapDispatchToProps)(AddAdmin)