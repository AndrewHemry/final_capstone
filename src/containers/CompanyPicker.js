import { connect } from "react-redux";
import CompanyPicker from "../components/CompanyPicker";

const mapStateToProps = (state) => {
    return {
        available_companies: state.available_companies
    }
}

export default connect(mapStateToProps)(CompanyPicker)