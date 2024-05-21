import React, { useState } from 'react';

export default function Bt9() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const users = localStorage.getItem("users");
        const usersArray = JSON.parse(users || "[]");
        const foundUser = usersArray.find((user: any) => user.email === email && user.pass === password);

        if (foundUser) {
            alert("xong");
        } else {
            alert("sai");
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h5>Đăng nhập tài khoản</h5>
                <p>Email</p>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <p>Password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
