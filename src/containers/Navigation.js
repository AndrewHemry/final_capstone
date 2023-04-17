import { connect } from "react-redux";
import Navigation from "../components/Navigation";

const mapStateToProps = (state) => {
    return {
        user: state.user,
        available_companies: state.available_companies,
        current_company: state.current_company
    }
}

export default connect(mapStateToProps)(Navigation)