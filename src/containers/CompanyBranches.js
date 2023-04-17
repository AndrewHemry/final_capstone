import { connect } from "react-redux";
import CompanyBranches from "../components/CompanyBranches";

const mapStateToProps = (state) => {
    return {
        current_company: state.current_company,
        branches: state.branches
    }
}

export default connect(mapStateToProps)(CompanyBranches)