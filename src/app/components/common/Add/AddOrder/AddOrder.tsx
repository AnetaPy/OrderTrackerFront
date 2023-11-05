import React, {SyntheticEvent, useEffect, useState} from "react";
import './AddOrder.css';
import {Btn} from "@/components/common/Btn/Btn";
import {ImportExcel} from "@/components/importExcel/ImportExcel";
import {ItemEntity} from "types";

export const AddOrder = () => {
    const [allMaterials, setAllMaterials] = useState<ItemEntity[] | null>(null);
    const [loading, setLoading] = useState<Boolean | null>(null);
    const [idOrder, setIdOrder] = useState<String>('');
    const [form, setForm] = useState({
        name: '',
        status: 'Wybierz',
        date: '',
        singleMaterialId: '',
        singleMaterialName: 'Wybierz',
        singleMaterialAmount: '',
        comment: '',
    });

    // Loading all materials from database.
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/material`);
            const data = await res.json();
            setAllMaterials(data);
        })()
    }, []);

    // Finding id of selected material.
    if (form.singleMaterialName !== 'Wybierz') {
        for (const material of allMaterials) {
            if (material.name === form.singleMaterialName) {
                form.singleMaterialId = material.id
            }
        }
    }

    const saveOrder = async (e: SyntheticEvent) => {
        e.preventDefault();
        // Updating amount of the selected material.
        const updateMaterial = await fetch(`http://localhost:3001/material/${form.singleMaterialId}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                amount: form.singleMaterialAmount,
            }),
        })

        // Checking if there is enough selected material.
        if (updateMaterial.status === 400 || updateMaterial.status === 500) {
            const err = await updateMaterial.json();
            alert(`${err.message}`);
            setLoading(false);
            return;
        }

        // Adding order.
        const addOrder = await fetch(`http://localhost:3001/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        });
        const data = await addOrder.json();
        setIdOrder(data.id);

        // Adding relation material-order.
        const materialRelation = {
            order_id: data.id,
            item_id: form.singleMaterialId,
            amount: form.singleMaterialAmount,
        }
        const resRelation = await fetch(`http://localhost:3001/material/relation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(materialRelation)
        });
        await resRelation.json();
        setLoading(true);
    }


    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }

    // If everything is ok, return a success message.
    if (loading) {
        return (
            <div className="Add_order">
                <div className="Add_order_container">
                    <h3>Zamówienie "{form.name}" zostało poprawnie dodane do bazy.</h3>
                    <a href="/orders">Zobacz wszystkie zamówienia <img src="/icons/arrow_right.png" alt=""/></a>
                    <a href="/home">Odśwież stronę główną <img src="/icons/arrow_right.png" alt=""/></a>
                </div>
            </div>
        )
    }

    return (
        <div className="Add_order">
            <div className="Add_order_container">
                <div className="Add_order_header">
                    <h2>Dodaj nowe zamówienie</h2>
                    <a href="/orders" className="see_all">zobacz wszystkie <img src="/icons/arrow_right.png"
                                                                                alt=""/></a>
                </div>
                <form onSubmit={saveOrder}>
                    <div className="Add_order_left_side">
                        <label>
                            Nazwa
                            <input
                                type="text"
                                name="name-order"
                                value={form.name}
                                onChange={e => updateForm('name', e.target.value)}
                                className="Name_order"
                                placeholder="Nazwa zamówienia"
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
                            Materiały
                            <div className="Order_add_material">
                                <select
                                    name="name-material-order"
                                    value={form.singleMaterialName}
                                    onChange={e => updateForm('singleMaterialName', e.target.value)}
                                    required>
                                    <option disabled>Wybierz</option>
                                    {
                                        allMaterials?.map(material => {
                                            return <option key={material.id}
                                                           value={material.name}>{material.name}</option>
                                        })
                                    }
                                </select>
                                <input
                                    type="number"
                                    name="amount-material-order"
                                    min={0}
                                    value={form.singleMaterialAmount}
                                    onChange={e => updateForm('singleMaterialAmount', e.target.value)}
                                    className="Amount_material_order"
                                    placeholder="0"
                                />
                            </div>
                        </label>
                    </div>
                    <div className="Add_order_right_side">
                        <label>
                            Wczytaj dane
                            <ImportExcel idOrder={idOrder}/>
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
                    </div>
                </form>
            </div>
        </div>
    )
}