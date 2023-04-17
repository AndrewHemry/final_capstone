import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import cookie from "cookie";

const Navigation = (props) => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentCompany, setCurrentCompany] = useState(null);


    useEffect(() => {
        const parsedCookie = cookie.parse(document.cookie);
        setIsLoggedIn(parsedCookie.loggedIn === "true");
    }, []);

    function handleLogout() {
        document.cookie = cookie.serialize("loggedIn", false, { maxAge: 0 });
        navigate("/login");
        window.location.reload(false);
    }

    // Declare currentCompany as a local state variable
    const [localCurrentCompany, setLocalCurrentCompany] = useState(currentCompany);

    // Update localCurrentCompany whenever currentCompany changes
    useEffect(() => {
        setLocalCurrentCompany(currentCompany);
    }, [currentCompany]);

    return (
        <nav className="nav-bar">
            <AppBar position="relative">
                <Toolbar className="toolbar-nav">
                    <Typography variant="h6" style={{ flexGrow: "1" }}>

                        {localCurrentCompany ? (
                            <Link className="nav-company-title" to={`/company/${localCurrentCompany.id}`}>
                                {localCurrentCompany.name}
                            </Link>
                        ) : (
                            <Link className="nav-company-title" to="/">Select a Company</Link>
                        )}

                        {/* {currentCompany ? (
                            <Link className="nav-company-title" to={`/company/${currentCompany.id}`}>
                                {currentCompany.name}
                            </Link>
                        ) : (
                            <Link className="nav-company-title" to="/">Select a Company</Link>
                        )} */}
                        
                    </Typography>
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <Link className="nav-list-link" to="/">Branches</Link>
                        </li>
                        <li className="nav-list-item">
                            {isLoggedIn ? (
                                <Link className="nav-list-link" to="/add">Add</Link>
                            ): null }
                        </li>
                        <li className="nav-list-item">
                            {isLoggedIn ? (
                                <Link className="nav-list-link" to="/" onClick={handleLogout}>Logout</Link>
                            ) : (
                                <Link className="nav-list-link" to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
            <div className="current-user-bar">
                {isLoggedIn ? (
                    <h4 className="current-user-text">Logged in as: {props.user.username} </h4>
                ) : null}
            </div>
        </nav>
    )
}

export default Navigation;