import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';

function Login() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(login({
            name: "Victor Mugisha",
            age: 20,
            username: username,
            email: "victor@gmail.com"
        }))
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
            />
            <button onClick={handleLogin} className="login-button">Login</button>
        </div>
    );
}

export default Login;
