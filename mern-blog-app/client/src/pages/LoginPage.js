import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function login(ev) {
        ev.preventDefault();
        fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-type':'application/json'},
        })
    }

    return (
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input type="text" onChange={ev => setUsername(ev.target.value)} value={username} placeholder="Username" />
            <input type="password" onChange={ev => setPassword(ev.target.value)}  placeholder="Password" value={password} />
            <button>Login</button>
        </form>
    );
}