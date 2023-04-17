import React, { useState } from "react";
import { useNavigate } from "react-router";
import { TextField, Button, Container } from "@mui/material";
import cookie from "cookie";

const Login = (props) => {
    const navigate = useNavigate();

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
                        value={state.username}
                        name="username"
                        label="Username"
                        type="text"
                        variant="standard"
                    />
                    <TextField 
                        required
                        onChange={handleTextChange}
                        value={state.password}
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