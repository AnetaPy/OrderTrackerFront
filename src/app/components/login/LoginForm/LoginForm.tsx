"use client"

import React, {FormEvent, useRef, useState} from "react";
import './LoginForm.css';
import Link from "next/link";
import {redirect} from "next/navigation";

export const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const email = useRef("");
    const password = useRef("");
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3001/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await res.json();
        if (data) {
            setLoading(true)
        } else {
            alert("Błędny login lub hasło!");
        }
    }

    if (loading){
        redirect('/home')
    }

    return (
        <div className="Login_form">
            <form onSubmit={onSubmit}>
                <label>
                    E-mail
                    <input
                        type="e-mail"
                        onChange={(e) => (email.current = e.target.value)}
                        className="Login_email"
                        placeholder="Email"
                    />
                </label>
                <label>
                    Hasło
                    <input
                        type="password"
                        onChange={(e) => (password.current = e.target.value)}
                        className="Login_password"
                        placeholder="Hasło"
                    />
                </label>
                <button onClick={onSubmit}>Zaloguj</button>
            </form>
            <Link href="/signup"><p>Nie masz konta? <span>Zarejestruj się!</span></p></Link>
        </div>
    )
};