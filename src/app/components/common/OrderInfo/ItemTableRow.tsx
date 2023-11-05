import React, {SyntheticEvent} from "react";

interface Props {
    id: string;
    name: string;
    amount: number;
    btn?: boolean;
    onMaterialsChange: () => void;
}

export const ItemTableRow = (props: Props) => {
    const deleteItem = async (e: SyntheticEvent) => {
        e.preventDefault();
        if (!window.confirm(`Czy na pewno chcesz usunąć ${props.name}?`)) {
            return
        }

        const res = await fetch(`http://localhost:3001/material/${props.id}`, {
            method: 'DELETE',
        })

        if (res.status === 400 || res.status === 500) {
            const err = await res.json();
            alert(`Błąd: ${err.message}`)
            return;
        }
        props.onMaterialsChange();
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.amount}</td>
            {props.btn ? <td><a href="#" onClick={deleteItem}>🗑️ Usuń</a></td> : null}
        </tr>
    )
}