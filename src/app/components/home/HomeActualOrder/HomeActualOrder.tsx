import React, {useEffect, useState} from "react";
import './HomeActualOrder.css';
import {OrderInfoMaterialsUsed} from "@/components/common/OrderInfo/OrderInfoMaterialsUsed";
import {OrderInfoElementsUsed} from "@/components/common/OrderInfo/OrderInfoElementsUsed";
import {Spinner} from "@/components/common/Spinner/Spinner";
import {OrderEntity} from "types";

interface Props {
    id: string;
}

export const HomeActualOrder = (props: Props) => {
    const [order, setOrder] = useState<OrderEntity | null>(null);
    let difference;
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/home/${props.id}`);
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
                            <p>Do końca pozostało {difference} dni</p>
                        </div>
                    </div>
                    <OrderInfoElementsUsed elements={order.elements} text="Elementy"/>
                    <OrderInfoMaterialsUsed materials={order.materials} text="Wykorzystane materiały"/>
                </div>
            </div>
        </div>
    )
}