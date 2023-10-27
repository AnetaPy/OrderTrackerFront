import './page.css';
import 'react-calendar/dist/Calendar.css';
import {MyCalendar} from "@/components/MyCalendar/MyCalendar";
import React from "react";
import {Btn} from "@/components/common/Btn";
import {Divider} from "@/components/common/Divider";

const Home = () => {

    return (
        <div className="Home">
            <div className="Home_navigation">
                <div className="Home_user_details">
                    <img src="/icons/user.png" alt="User image"/>
                    <div className="Home_user_information">
                        <h3>Aneta</h3>
                        <p>aneta@gmail.com</p></div>
                </div>
                <nav>
                    <ul>
                        <div>
                            <li><a href="/home"><img src="/icons/home.png" alt="Home image"/><p>Home</p></a></li>
                            <li><a href="/orders"><img src="/icons/order.png" alt="Notes image"/><p>Zamówienia</p></a>
                            </li>
                            <li><a href="/materials"><img src="/icons/materials.png" alt="Check mark image"/>
                                <p>Materiały</p></a></li>
                        </div>
                        <div>
                            <div className="Home_line"></div>
                            <li><a href="/contact"><img src="/icons/contact.png" alt="Envelope image"/><p>Kontakt</p>
                            </a></li>
                            <li><a href="/log-out"><img src="/icons/log_out.png" alt="Arrow right image"/><p>Kontakt</p>
                            </a></li>
                        </div>
                    </ul>
                </nav>
            </div>
            <div className="Home_container">
                <div className="Home_header">
                    <h1>Witaj Aneta!</h1>
                    <h2>Od czego dzisiaj zaczynamy?</h2>
                </div>
                <div className="Home_wrapper">
                    <div className="Home_calendar">
                        <MyCalendar/>
                    </div>
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
                                <div className="Home_elements">
                                    <h3>Elementy</h3>
                                    <div className="Home_elements_container">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>Lp</th>
                                                <th>Nazwa</th>
                                                <th>Ilość</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Koła</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Owale</td>
                                                <td>30</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Przebiśniegi</td>
                                                <td>13</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Przebiśniegi</td>
                                                <td>13</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Przebiśniegi</td>
                                                <td>13</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Przebiśniegi</td>
                                                <td>13</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Przebiśniegi</td>
                                                <td>13</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Przebiśniegi</td>
                                                <td>13</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Przebiśniegi</td>
                                                <td>13</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Przebiśniegi</td>
                                                <td>13</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div className="Home_materials_used">
                                    <h3>Wykorzystane materiały</h3>
                                    <div className="Home_materials_used_container">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>Lp</th>
                                                <th>Nazwa</th>
                                                <th>Ilość</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Freaz</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Recznik</td>
                                                <td>30</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Płyn</td>
                                                <td>30</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Freaz</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Recznik</td>
                                                <td>30</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Płyn</td>
                                                <td>30</td>
                                            </tr>

                                            </tbody>


                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Home_add_material">
                        <div className="Home_add_material_container">
                            <h2>Dodaj nowy materiał</h2>
                            {/*<a href="/materials">zobacz stan mazynowy <img src="/icons/arrow_right.png" alt=""/></a>*/}
                            <form>
                                <label>
                                    Nazwa
                                    <input
                                        type="text"
                                        name="name-material"
                                        // value={email}
                                        // onChange={(e) => setEmail(e.target.value)}
                                        className="Home_name_material"
                                        placeholder="Nazwa materiału"
                                    />
                                </label>
                                <label>
                                    Ilość
                                    <input
                                        type="number"
                                        name="amount-material"
                                        // value={email}
                                        // onChange={(e) => setEmail(e.target.value)}
                                        className="Home_amount_material"
                                        placeholder="0"
                                    />
                                </label>
                                <label>
                                    Komentarz
                                    <textarea
                                        name="comment"
                                        cols="30"
                                        rows="4"
                                        // value={email}
                                        // onChange={(e) => setEmail(e.target.value)}
                                        className="Home_comment"
                                        placeholder="Twój komentarz">
                                    </textarea>
                                </label>
                                <Btn text="Zapisz"/>
                            </form>
                        </div>
                    </div>
                    <div className="Home_add_order">
                        <div className="Home_add_order_container">
                            <div className="Home_add_order_header">
                                <h2>Dodaj nowe zamówienie</h2>
                                <a href="/materials">zobacz wszystkie <img src="/icons/arrow_right.png" alt=""/></a>
                            </div>
                            <form>
                                <div className="Home_add_order_left_side">
                                    <label>
                                        Nazwa
                                        <input
                                            type="text"
                                            name="name-order"
                                            // value={email}
                                            // onChange={(e) => setEmail(e.target.value)}
                                            className="Home_name_order"
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
                                        <div className="Home_order_add_material">
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
                                                className="Home_amount_material_order"
                                                placeholder="0"
                                            />
                                        </div>
                                        <div className="Home_order_add_material">
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
                                                className="Home_amount_material_order"
                                                placeholder="0"
                                            />
                                        </div>
                                        <div className="Home_order_add_material">
                                            <select name="name-material-order">
                                                <option >Wybierz</option>
                                                <option value="">Frez</option>
                                                <option value="">Płyn</option>
                                                <option value="">Reczniki</option>
                                            </select>
                                            <input
                                                type="number"
                                                name="amount-material-order"
                                                // value={email}
                                                // onChange={(e) => setEmail(e.target.value)}
                                                className="Home_amount_material_order"
                                                placeholder="0"
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div className="Home_add_order_right_side">
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
                                            className="Home_name_element"
                                            placeholder="Nazwa"
                                        />
                                        <input
                                            type="number"
                                            name="amount-element"
                                            // value={email}
                                            // onChange={(e) => setEmail(e.target.value)}
                                            className="Home_amount_element"
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
                                            className="Home_comment"
                                            placeholder="Twój komentarz">
                                    </textarea>
                                    </label>
                                    <Btn text="Zapisz"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;