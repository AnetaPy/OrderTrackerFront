import React from "react";
import './AddOrder.css';
import {Btn} from "@/components/common/Btn/Btn";
import {Divider} from "@/components/common/Divider/Divider";

export const AddOrder = () => {
    return (
        <div className="Add_order">
            <div className="Add_order_container">
                <div className="Add_order_header">
                    <h2>Dodaj nowe zamówienie</h2>
                    <a href="/materials">zobacz wszystkie <img src="/icons/arrow_right.png" alt=""/></a>
                </div>
                <form>
                    <div className="Add_order_left_side">
                        <label>
                            Nazwa
                            <input
                                type="text"
                                name="name-order"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                className="Name_order"
                                placeholder="Nazwa zamówienia"
                            />
                        </label>
                        <label>
                            Status
                            <select name="status-order">
                                <option value="">Do zrobienia</option>
                                <option value="">W trakcie</option>
                                <option value="">Zrobione</option>
                                <option value="">Opóźnione</option>
                            </select>
                        </label>
                        <label>
                            Data
                            <input type="date"/>
                        </label>
                        <label>
                            Materiały
                            <div className="Order_add_material">
                                <select defaultValue={"DEFAULT"} name="name-material-order">
                                    <option value="DEFAULT" disabled>Wybierz</option>
                                    <option value="">Frez</option>
                                    <option value="">Płyn</option>
                                    <option value="">Reczniki</option>
                                </select>
                                <input
                                    type="number"
                                    name="amount-material-order"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="Amount_material_order"
                                    placeholder="0"
                                />
                            </div>
                            <div className="Order_add_material">
                                <select name="name-material-order">
                                    <option>Wybierz</option>
                                    <option value="">Frez</option>
                                    <option value="">Płyn</option>
                                    <option value="">Reczniki</option>
                                </select>
                                <input
                                    type="number"
                                    name="amount-material-order"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="Amount_material_order"
                                    placeholder="0"
                                />
                            </div>
                            <div className="Order_add_material">
                                <select name="name-material-order">
                                    <option>Wybierz</option>
                                    <option value="">Frez</option>
                                    <option value="">Płyn</option>
                                    <option value="">Reczniki</option>
                                </select>
                                <input
                                    type="number"
                                    name="amount-material-order"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="Amount_material_order"
                                    placeholder="0"
                                />
                            </div>
                        </label>
                    </div>
                    <div className="Add_order_right_side">
                        <label>
                            Wczytaj dane
                            <Btn src="/images/icon-excel.png" alt="Excel icon" text="Plik .xlsx"/>
                        </label>
                        <Divider></Divider>
                        <label>
                            Wpisz dane ręcznie
                            <br/>
                            <input
                                type="text"
                                name="name-element"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                className="Name_element"
                                placeholder="Nazwa"
                            />
                            <input
                                type="number"
                                name="amount-element"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                className="Amount_element"
                                placeholder="0"
                            />
                        </label>
                        <label>
                            Komentarz
                            <textarea
                                name="comment"
                                cols="30"
                                rows="2"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                className="Comment"
                                placeholder="Twój komentarz">
                                    </textarea>
                        </label>
                        <Btn text="Zapisz"/>
                    </div>
                </form>
            </div>
        </div>
    )
}