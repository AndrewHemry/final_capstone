import { connect } from "react-redux";
import CompanyPicker from "../components/CompanyPicker";

const mapStateToProps = (state) => {
    return {
        available_companies: state.available_companies,
        branches: state.branches
    }
}

export default connect(mapStateToProps)(CompanyPicker)