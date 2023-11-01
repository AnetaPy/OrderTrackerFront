import React from "react";
import './SingleOrder.css';
import {OrderInfoItemsUsed} from "@/components/common/OrderInfo/OrderInfoItemsUsed";
import {Btn} from "@/components/common/Btn/Btn";

export const SingleOrder = () => {
    return (
        <div className="Orders_single_order">
            <h2>Zam1</h2>
            <p>W trakcie</p>
            <OrderInfoItemsUsed text="Elementy"/>
            <div className="Orders_single_order_buttons">
                <Btn text="Sczegóły"/>
                <Btn text="Edytuj"/>
                <Btn text="Usuń"/>
            </div>
        </div>
    )
}