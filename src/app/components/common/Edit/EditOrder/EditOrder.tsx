import './EditOrder.css';
import React, {SyntheticEvent, useState} from "react";
import {Btn} from "@/components/common/Btn/Btn";

interface Props {
    onOrdersChange: () => void;
    id: string,
    name: string,
    status: string,
    date: Date;
    comment: string,
}

export const EditOrder = (props: Props) => {
    const {name, status, date, comment} = props;
    const [form, setForm] = useState({
        name: name,
        status: status,
        date: new Date(date).toISOString().split('T')[0],
        comment: comment,
    });

    const saveOrder = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch(`http://localhost:3001/order/update/${props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id: props.id,
                name: form.name,
                status: form.status,
                date: form.date,
                comment: form.comment,
            }),
        })
        props.onOrdersChange();
    }

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }

    return (
        <div className="Edit_order">
            <div className="Edit_order_container">
                <h2>Edytuj zamówienie</h2>
                <form onSubmit={saveOrder}>
                    <label>
                        Nazwa
                        <input
                            type="text"
                            name="name-order"
                            value={form.name}
                            onChange={e => updateForm('name', e.target.value)}
                            className="Name_order"
                            required
                        />
                    </label>
                    <label>
                        Status
                        <select
                            name="status-order"
                            value={form.status}
                            onChange={e => updateForm('status', e.target.value)}
                            required>
                            <option disabled>Wybierz</option>
                            <option value="Do zrobienia">Do zrobienia</option>
                            <option value="W trakcie">W trakcie</option>
                            <option value="Zrobione">Zrobione</option>
                            <option value="Opóźnione">Opóźnione</option>
                        </select>
                    </label>
                    <label>
                        Data
                        <input
                            type="date"
                            value={form.date}
                            onChange={e => updateForm('date', e.target.value)}
                            required/>
                    </label>
                    <label>
                        Komentarz
                        <textarea
                            name="comment"
                            cols="30"
                            rows="4"
                            value={form.comment}
                            onChange={e => updateForm('comment', e.target.value)}
                            className="Comment"
                            placeholder="Twój komentarz">
                            </textarea>
                    </label>
                    <Btn text="Zapisz"/>
                </form>
            </div>
        </div>
    )
}