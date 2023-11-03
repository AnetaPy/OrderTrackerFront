import React, {SyntheticEvent, useState} from "react";
import './AddMaterial.css';
import {Btn} from "@/components/common/Btn/Btn";
import {Spinner} from "@/components/common/Spinner/Spinner";

interface Props {
    onMaterialsChange?: () => void;
}

export const AddMaterial = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(null);
    const [form, setForm] = useState({
        name: '',
        amount: 0,
        comment: '',
    });

    const saveMaterial = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:3001/materials`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            setId(data.id);
        } finally {
            setLoading(false);
        }
        props.onMaterialsChange ? props.onMaterialsChange() : null;
    }

    if (loading) {
        return <Spinner/>
    }

    if (id) {
        return <div className="Add_material">
            <div className="Add_material_container">
                <h2>Materiał "{form.name}" został poprawnie dodany do bazy</h2>
                <a href="/materials">Zobacz stan mazynowy <img src="/icons/arrow_right.png" alt=""/></a>
            </div>
        </div>
    }

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }

    return (
        <div className="Add_material">
            <div className="Add_material_container">
                <h3>Dodaj nowy materiał</h3>
                <form onSubmit={saveMaterial}>
                    <label>
                        Nazwa
                        <input
                            type="text"
                            name="name-material"
                            value={form.name}
                            onChange={e => updateForm('name', e.target.value)}
                            className="Name_material"
                            placeholder="Nazwa materiału"
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
                            className="Amount_material"
                            placeholder="0"
                            required
                        />
                    </label>
                    <Btn text="Zapisz"/>
                </form>
            </div>
        </div>
    )
}