'use client'

import React, {SyntheticEvent, useState} from "react";
import './SignupForm.css';
import {Spinner} from "@/components/common/Spinner/Spinner";
import {redirect} from "next/navigation";
import Link from "next/link";

export const SignupForm = () => {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        passwordFirst: '',
        passwordSecond: ''
    });
    const {email, passwordFirst, name, passwordSecond} = form;

    const saveUser = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:3001/user/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            });
            if (res.status === 400 || res.status === 500) {
                const err = await res.json();
                alert(`Błąd: ${err.message}`)
                return;
            }
            const data = await res.json();
            setUsername(data.name)
        } finally {
            setLoading(false);
        }

    }
    if (loading) {
        return <Spinner/>

    }
    if (username) {
        redirect("http://localhost:3000")
    }

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))

    }
    return (
        <div className="Signup_container">
            <Link href="/home"><img src="/images/logo.png" alt="Logo OrderTracker"/></Link>
            <h2>Rejestracja</h2>
            <div className="Signup_form">
                <form onSubmit={saveUser}>
                    <label>
                        Imię
                        <input
                            type="text"
                            value={name}
                            onChange={e => updateForm('name', e.target.value)}
                            className="Login_name"
                            placeholder="Imię"
                        />
                    </label>
                    <label>
                        E-mail
                        <input
                            type="email"
                            value={email}
                            onChange={e => updateForm('email', e.target.value)}
                            className="Login_email"
                            placeholder="E-mail"
                        />
                    </label>
                    <label>
                        Hasło
                        <input
                            type="password"
                            value={passwordFirst}
                            onChange={e => updateForm('passwordFirst', e.target.value)}
                            className="Login_password"
                            placeholder="Hasło"
                        />
                    </label>
                    <label>
                        Powtórz hasło
                        <input
                            type="password"
                            value={passwordSecond}
                            onChange={e => updateForm('passwordSecond', e.target.value)}
                            className="Login_password"
                            placeholder="Powtórz hasło"
                        />
                    </label>
                    <button
                        disabled={!email || !passwordFirst || !passwordSecond}
                    > Zarejestruj się
                    </button>
                </form>
            </div>
        </div>
    )
};