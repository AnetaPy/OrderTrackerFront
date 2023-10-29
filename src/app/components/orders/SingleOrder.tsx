import React from "react";
import './SingleOrder.css';
import {HomeActualOrderElements} from "@/components/home/HomeActualOrder/HomeActualOrderElements/HomeActualOrderElements";
import {Btn} from "@/components/common/Btn";

export const SingleOrder = () => {
    return (
        <div className="Orders_single_order">
            <h2>Zam1</h2>
            <p>W trakcie</p>
            <HomeActualOrderElements/>
            <div className="Orders_single_order_buttons">
                <Btn text="Sczegóły"/>
                <Btn text="Edytuj"/>
                <Btn text="Usuń"/>
            </div>
        </div>
    )
}