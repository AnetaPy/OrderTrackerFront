import React, {useEffect, useState} from "react";
import './HomeActualOrder.css';
import {OrderInfoItemsUsed} from "@/components/common/OrderInfo/OrderInfoItemsUsed";
import {Spinner} from "@/components/common/Spinner/Spinner";
import {OrderEntity} from "types";

export const HomeActualOrder = () => {
    const [order, setOrder] = useState<OrderEntity | null>(null);
    let difference;
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/home`);
            const data = await res.json();
            setOrder(data);
        })()
    }, []);
    if (order === null) {
        return (
            <div className="Home_actual_order">
                <div className="Home_actual_order_container">
                    <Spinner/>
                </div>
            </div>)
    }

    if (order?.date) {
        const currentDate = new Date().getTime();
        const deadlineDate = new Date(order.date).getTime();
        difference = Math.ceil((deadlineDate - currentDate) / (1000 * 3600 * 24));
    }

    return (
        <div className="Home_actual_order">
            <div className="Home_actual_order_container">
                <h2>{order?.name}</h2>
                <p>{order?.status}</p>
                {difference > 0
                    ? <p className={difference > 7 ? "Home_notification_green" : "Home_notification_orange"}>Pozostało
                        Ci {difference} dni do końca terminu</p>
                    : <p className="Home_notification_red">Jesteś {-difference} dni po terminie</p>}
                <div className="Home_actual_order_container_items">
                    <div className="Home_deadline">
                        <h3>Termin</h3>
                        <div className="Home_deadline_container">
                            <h4>{order.date ? new Date(order.date).toLocaleDateString() : null}</h4>
                            {difference > 0
                                ? <p>Pozostało Ci {difference} dni do końca terminu</p>
                                : <p>Jesteś {-difference} dni po terminie</p>}
                        </div>
                    </div>
                    <OrderInfoItemsUsed items={order.elements} text="Elementy"/>
                    <OrderInfoItemsUsed items={order.materials} text="Wykorzystane materiały"/>
                </div>
            </div>
        </div>
    )
}