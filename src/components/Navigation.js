import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import HomeIcon from "./HomeIcon"
import cookie from "cookie";
import BranchPicker from "./BranchPicker"
import AddAdmin from "../containers/AddAdmin";
import AddBranch from "../containers/AddBranch";
import AddEmployee from "../containers/AddEmployee"

const Navigation = (props) => {

    const navigate = useNavigate();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const currentCompany = JSON.parse(localStorage.getItem('currentCompany'))

    useEffect(() => {
        console.log("Effect ran inside navigation")
        const parsedCookie = cookie.parse(document.cookie);
        props.setIsLoggedIn(parsedCookie.loggedIn === "true");
    }, []);

    // When logging out, it should also clear the localStorage
    function handleLogout() {
        document.cookie = cookie.serialize("loggedIn", false, { maxAge: 0 });
        navigate("/login");
        localStorage.clear();
        props.setIsLoggedIn(false)
        // window.location.reload(false);
    }

    // This is clearing all the localStorage data
    function handleChangeCompany() {
        localStorage.clear();
    }

    // This is clearing the localStorage branch data
    // ACTION ITEM - I'm getting an error that props.setCurrentBranch is not a function
    function handleClearBranch() {
        localStorage.removeItem("currentBranch");
        props.setCurrentBranch('');
    }

    return (
        <nav className="nav-bar">
            <AppBar position="relative">
                <Toolbar className="toolbar-nav">
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        {currentCompany ? (
                            <div className="nav-company">
                                <HomeIcon />
                                <Link className="nav-company-title" 
                                    onClick={handleClearBranch} 
                                    to={`/company/${currentCompany.company_id}`}
                                >
                                    {currentCompany.company_name}
                                </Link>
                                <BranchPicker branches={props.branches} />
                            </div>
                        ) : (

                            <Link className="nav-link-default" to="/" onClick={handleChangeCompany}>Select a Company</Link>
                        )}
                        
                    </Typography>
                    <ul className="nav-list">
                        {/* ACTION ITEM - NEED TO ADD A handleAddBranch to call on my API router & also update the state - This also means I will need to modify redux to support */}
                        {/* IF I am inside of a branch, I should not show this... only Add Employee */}
                        {currentCompany ? (
                            <li className="nav-list-item">
                                <AddBranch branchTotal={props.branches.length} />
                            </li>
                        ) : ( 
                            null 
                        )}
                        {currentCompany ? (
                            <li className="nav-list-item">
                                <AddEmployee employeeTotal={props.employees.length} />
                            </li>
                        ) : ( 
                            null 
                        )}
                        {currentCompany ? (
                            <li className="nav-list-item">
                                <AddAdmin adminTotal={props.admins.length}/>
                            </li>
                        ) : ( 
                            null 
                        )}
                        <li className="nav-list-item">
                            {props.isLoggedIn ? (
                                <Link className="nav-list-link" to="/" onClick={handleLogout}>Logout</Link>
                            ) : (
                                <Link className="nav-list-link" to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
            <div className="current-user-bar">
                {props.isLoggedIn ? (
                    <h4 className="current-user-text">Logged in as: {props.user.username} </h4>
                ) : null}
            </div>
        </nav>
    )
}

export default Navigation;