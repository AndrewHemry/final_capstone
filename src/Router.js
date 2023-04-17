import React from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Login from "./components/Login";
import CompanyPicker from "./containers/CompanyPicker";
import CompanyBranches from "./containers/CompanyBranches";

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
}

const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;
    return (
        checkAuth() === true ? (<Component {...rest} />) : (<Navigate to="/login" />)
    )
}

const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            {/* Add setCurrentCompany */}
            {/* <Route path="/" element={<ProtectedRoute component={() => <CompanyPicker setCurrentCompany={setCurrentCompany} />} />}/> */}
            <Route path="/" element={<ProtectedRoute component={CompanyPicker} />}/>
            {/* <Route path="/company/:id" element={<ProtectedRoute component={() => <CompanyBranches setCurrentCompany={setCurrentCompany} />} />}/> */}
            <Route path="/company/:id" element={<ProtectedRoute component={CompanyBranches} />}/>
            {/* Add Route for Branch Details, which will be the directory for X branch */}
        </Routes>
    )
}

export default Router;

// Examples
{/* <Route path="/login" element={<Login/>}/> */}
{/* <Route path="/business/:id" element={<Details/>} /> */}
{/* <Route path="/add" element={<ProtectedRoute component={AddBusiness} />} /> */}