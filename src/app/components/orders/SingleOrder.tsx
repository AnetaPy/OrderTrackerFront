import React, {SyntheticEvent} from "react";
import './SingleOrder.css';
import Link from "next/link";
import Popup from "reactjs-popup";
import {OrderEntity} from "types";
import {OrderInfoItemsUsed} from "@/components/common/OrderInfo/OrderInfoItemsUsed";

interface Props {
    order: OrderEntity;
    onOrdersChange: () => void;
}

export const SingleOrder = (props: Props) => {
    const {id, name, status, date, elements, materials, comment} = props.order;

    const deleteOrder = async (e: SyntheticEvent) => {
        e.preventDefault();
        if (!window.confirm(`Czy na pewno chcesz usunąć zamówienie "${name}"?`)) {
            return
        }

        const res = await fetch(`http://localhost:3001/order/${id}`, {
            method: 'DELETE',
        })

        if (res.status === 400 || res.status === 500) {
            const err = await res.json();
            alert(`Błąd: ${err.message}`)
            return;
        }
        props.onOrdersChange();
    }

    return (
        <div className="Orders_single_order">
            <h2>{name}</h2>
            <p>{status}</p>
            <p>{date ? new Date(date).toLocaleDateString() : null}</p>
            <div className="Orders_single_order_items">
                <OrderInfoItemsUsed text="Elementy" items={elements}/>
                <OrderInfoItemsUsed text="Materiały" items={materials}/>
            </div>
            <p>{comment}</p>
            <div className="Orders_single_order_buttons">
                <Popup closeOnDocumentClick trigger={<Link href="#">🖊️ Edytuj</Link>}
                       position="right center">
                    <p>ok</p>
                </Popup>
                <Link href="#" onClick={deleteOrder}>🗑️ Usuń</Link>
            </div>
        </div>
    )
}