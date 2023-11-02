import React from "react";
import './SingleOrder.css';
import {OrderInfoItemsUsed} from "@/components/common/OrderInfo/OrderInfoItemsUsed";
import {Btn} from "@/components/common/Btn/Btn";
import {OrderEntity} from "types";

interface Props {
    order: OrderEntity
}

export const SingleOrder = (props: Props) => {
    const {name, status, date, elements, materials} = props.order;
    return (
        <div className="Orders_single_order">
            <h2>{name}</h2>
            <p>{status}</p>
            <p>{date ? new Date(date).toLocaleDateString() : null}</p>
            <div className="Orders_single_order_items">
                <OrderInfoItemsUsed text="Elementy" items={elements}/>
                <OrderInfoItemsUsed text="Materiały" items={materials}/>
            </div>
            <div className="Orders_single_order_buttons">
                <Btn text="Sczegóły"/>
                <Btn text="Edytuj"/>
                <Btn text="Usuń"/>
            </div>
        </div>
    )
}