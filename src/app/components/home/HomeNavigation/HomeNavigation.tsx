import React from "react";
import './HomeNavigation.css';

export const HomeNavigation = () => {
    return (
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
    )
}