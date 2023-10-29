import React from "react";
import './HomeActualOrder.css';
import {OrderInfoMaterialsUsed} from "@/components/common/OrderInfo/OrderInfoMaterialsUsed/OrderInfoMaterialsUsed";
import {OrderInfoElementsUsed} from "@/components/common/OrderInfo/OrderInfoElementsUsed/OrderInfoElementsUsed";

export const HomeActualOrder = () => {
    return (
        <div className="Home_actual_order">
            <div className="Home_actual_order_container">
                <h2>Zam 1</h2>
                <p>W trakcie</p>
                <p className="Home_notification_orange">Pozostało Ci 8 dni do końca terminu</p>
                <div className="Home_actual_order_container_items">
                    <div className="Home_deadline">
                        <h3>Deadline</h3>
                        <div className="Home_deadline_container">
                            <h4>10 listopad 2023</h4>
                            <p>Do końca pozostało 22 dni</p>
                        </div>
                    </div>
                    <OrderInfoElementsUsed/>
                    <OrderInfoMaterialsUsed text={"Wykorzystane materiały"}/>
                </div>
            </div>
        </div>
    )
}