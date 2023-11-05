import React, {SyntheticEvent, useState} from "react";
import './EditMaterial.css';
import {Btn} from "@/components/common/Btn/Btn";

interface Props {
    onMaterialsChange: () => void;
    id: string,
    name: string,
    amount: number
}

export const EditMaterial = (props: Props) => {
    const [form, setForm] = useState({
        name: props.name,
        amount: props.amount,
    });

    const saveMaterial = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch(`http://localhost:3001/material/update/${props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id: props.id,
                name: form.name,
                amount: form.amount,
            }),
        })
        props.onMaterialsChange();
    }

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }

    return (
        <div className="Edit_material">
            <div className="Edit_material_container">
                <form onSubmit={saveMaterial}>
                    <label>
                        Nazwa
                        <input
                            type="text"
                            name="name-material"
                            value={form.name}
                            onChange={e => updateForm('name', e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Ilość
                        <input
                            type="number"
                            name="amount-material"
                            value={form.amount}
                            min={0}
                            onChange={e => updateForm('amount', e.target.value)}
                            required
                        />
                    </label>
                    <Btn text="Zapisz"/>
                </form>
            </div>
        </div>
    )
}