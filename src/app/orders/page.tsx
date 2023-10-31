import React from "react";
import './page.css';
import {Navigation} from "@/components/common/Navigation/Navigation";
import {Header} from "@/components/common/Header/Header";
import {Btn} from "@/components/common/Btn/Btn";
import {SingleOrder} from "@/components/orders/SingleOrder";

const Orders = () => {
    return (
        <div className="Orders">
            <Navigation/>
            <div className="Orders_container">
                <Header text="Zamówienia"/>
                <div className="Orders_wrapper">
                    <div className="Orders_top_bar">
                        <Btn nameOfClass="active" text="Wszystkie"/>
                        <Btn nameOfClass="to_do" text="Do zrobienia"/>
                        <Btn nameOfClass="in_progress" text="W trakcie"/>
                        <Btn nameOfClass="done" text="Zrobione"/>
                        <Btn nameOfClass="delayed" text="Opóźnione"/>
                        <Btn text="Dodaj nowe zamówienie"/>
                    </div>
                    <div className="Orders_content">
                        <SingleOrder/>
                        <SingleOrder/>
                        <SingleOrder/>
                        <SingleOrder/>
                        <SingleOrder/>
                        <SingleOrder/>
                        <SingleOrder/>
                        <SingleOrder/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;
