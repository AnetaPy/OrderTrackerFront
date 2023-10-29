import React from "react";
import './SingleOrder.css';
import {OrderInfoElementsUsed} from "@/components/common/OrderInfo/OrderInfoElementsUsed/OrderInfoElementsUsed";
import {Btn} from "@/components/common/Btn";

export const SingleOrder = () => {
    return (
        <div className="Orders_single_order">
            <h2>Zam1</h2>
            <p>W trakcie</p>
            <OrderInfoElementsUsed/>
            <div className="Orders_single_order_buttons">
                <Btn text="Sczegóły"/>
                <Btn text="Edytuj"/>
                <Btn text="Usuń"/>
            </div>
        </div>
    )
}