import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import "./Login.css"
import GoogleLogin from "react-google-login"
import axios from "axios"


export const Login = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(login({
            username: username,
            password: password,
            loggedIn: true,
        }))
    }

    const responseGoogle = (response) => {
        axios({
            method: "POST",
            url: "http://localhost:8000/api/googleLogin",
            data: { tokenId: response.tokenId }
        }).then(response => {
            console.log(response)
        })
    }

    return (
        <div className='login'>
            <form className='loginForm' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login</h1>
                <input type="text" placeholder='Enter username' value={username} onChange={(e) => setUserName(e.target.value)} />
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
                <button type="submit" className='btn'>Submit</button>
            </form>
            <h3>Login with Google</h3>
        <GoogleLogin
            clientId="67785708010-333mg0af8hhoba5dsiddgbdr8ob2urcn.apps.googleusercontent.com"
            buttonText=" Login with Google "
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />,
        </div>
    )
}
