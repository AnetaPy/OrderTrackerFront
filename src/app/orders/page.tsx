"use client"

import React, {useEffect, useState} from "react";
import './page.css';
import {Navigation} from "@/components/common/Navigation/Navigation";
import {Header} from "@/components/common/Header/Header";
import {Btn} from "@/components/common/Btn/Btn";
import {SingleOrder} from "@/components/orders/SingleOrder";
import {Spinner} from "@/components/common/Spinner/Spinner";
import {OrderEntity} from "types";
import Link from "next/link";
import Popup from "reactjs-popup";
import {AddOrder} from "@/components/common/Add/AddOrder/AddOrder";

const Orders = () => {
    const [allOrders, setAllOrders] = useState<OrderEntity[] | null>(null);

    const refreshOrders = async () => {
        setAllOrders(null);
        const res = await fetch(`http://localhost:3001/order`);
        const data = await res.json();
        setAllOrders(data);
    }

    useEffect(() => {
        refreshOrders();
    }, []);

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
                        <Popup closeOnDocumentClick trigger={<Link href="#">Dodaj nowe zamówienie</Link>}
                               position="bottom right">
                            <AddOrder onOrdersChange={refreshOrders}/>
                        </Popup>
                    </div>
                    <div className="Orders_content">
                        {allOrders === null
                            ? <Spinner/>
                            : allOrders.map(order => (
                                <SingleOrder key={order.id} order={order} onOrdersChange={refreshOrders}/>
                            ))
                          }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;
