import React, { useState } from 'react';

export default function Bt10() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [check, setCheck] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (check === pass) {
            const user = {
                name,
                email,
                pass,
                check
            };

            alert("Dang ki thanh cong !");
            
            const localArr = JSON.parse(localStorage.getItem("users") || "[]");
            const changeArr = [...localArr, user];
            localStorage.setItem("users", JSON.stringify(changeArr));
        }
    };

    return (
        <div style={{ border: "1px solid white", display: "flex", flexDirection: "column" }}>
            <form onSubmit={handleSubmit}>
                <h4>Bai 9</h4>
                <h5>Dang ki tai khoan</h5>
                <p>Ho va ten :</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <p>Email :</p>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p>Pass :</p>
                <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} />
                <p>Check :</p>
                <input type="text" value={check} onChange={(e) => setCheck(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
