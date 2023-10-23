import './page.css';
import 'react-calendar/dist/Calendar.css';
import {MyCalendar} from "@/components/MyCalendar/MyCalendar";


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

                                            </tbody>


                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Home_add_material">
                        <div className="Home_add_material_container">Home_add_material</div>
                    </div>
                    <div className="Home_add_order">
                        <div className="Home_add_order_container">Home_add_order</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
