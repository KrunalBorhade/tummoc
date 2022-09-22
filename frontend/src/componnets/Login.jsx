import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'


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
    return (
        <div className='login'>
            <form className='loginForm' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login</h1>
                <input type="text" placeholder='Enter username' value={username} onChange={(e) => setUserName(e.target.value)} />
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className='btn'>Submit</button>
            </form>
        </div>
    )
}
