import React from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Login from "./components/Login";
import CompanyPicker from "./containers/CompanyPicker";
import BranchDetails from "./containers/BranchDetails";
import CompanyDetails from "./containers/CompanyDetails";

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
}

const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;
    if(!checkAuth()){
        props.setIsLoggedIn(false)
        localStorage.clear()
    }
    return (
        checkAuth() === true ? (<Component {...rest} />) : (<Navigate to="/login" />)
    )
}

const Router = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
            <Route path="/" element={<ProtectedRoute setIsLoggedIn={setIsLoggedIn} component={CompanyPicker} />}/>
            <Route path="/company/:company_id" element={<ProtectedRoute setIsLoggedIn={setIsLoggedIn} component={CompanyDetails} />}/>
            <Route path="/company/:company_id/branch/:branch_id" element={<ProtectedRoute setIsLoggedIn={setIsLoggedIn} component={BranchDetails} />}/>
        </Routes>
    )
}

export default Router;