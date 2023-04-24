import React, { useState } from "react";
import { useNavigate } from "react-router";
import { TextField, Button, Container } from "@mui/material";
import cookie from "cookie";

const Login = (props) => {
    const navigate = useNavigate();

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => {
            return {
                ...prevState,
                // I have a comma here in my other code but why?
                [name]: value
            }
        })
    }

    // ACTION ITEM - When I use the API login for this
    // const login = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch(process.env.REACT_APP_login, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ username, password }),
    //     });
    //     if (response.ok) {
    //         const token = await response.json();
    //         console.log("The token is:", token)
    //         localStorage.setItem("token", token)
    //         document.cookie = cookie.serialize("loggedIn", true, { maxAge: 600});
    //         navigate("/");
    //         window.location.reload(false);
    //     } else {
    //         alert("The username or password is incorrect.")
    //     }
    // }

    const login = (e) => {
        e.preventDefault();
        document.cookie = cookie.serialize("loggedIn", true, { maxAge: 600});
        navigate("/");
        window.location.reload(false);
    }

    return (
        <div className="login-page">
            <Container maxWidth="sm">
                <form className="login-form" onSubmit={login}>
                    <TextField 
                        required
                        onChange={handleTextChange}
                        // onChange={(e) => setUsername(e.target.value)}
                        value={state.username}
                        // value={username}
                        name="username"
                        label="Username"
                        type="text"
                        variant="standard"
                    />
                    <TextField 
                        required
                        onChange={handleTextChange}
                        // onChange={(e) => setPassword(e.target.value)}
                        value={state.password}
                        // value={password}
                        name="password"
                        label="Password"
                        type="password"
                        variant="standard"
                    />
                    <Button
                        style={{ marginTop: "15px" }}
                        className="login-button"
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                </form>
            </Container>
        </div>
    )
}

export default Login;