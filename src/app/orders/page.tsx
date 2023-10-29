import React from "react";
import './page.css';
import {Navigation} from "@/components/common/Navigation";
import {Header} from "@/components/common/Header";
import {Btn} from "@/components/common/Btn";
import {
    HomeActualOrderElements
} from "@/components/home/HomeActualOrder/HomeActualOrderElements/HomeActualOrderElements";

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
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Orders;
