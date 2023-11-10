import React from "react";
import './Navigation.css';
import Link from "next/link";

export const Navigation = (props) => {
    return (
        <div className="Navigation">
            <div className="Navigation_user_details">
            </div>
            <nav>
                <ul>
                    <div>
                        <li><Link href="/home"><img src="/icons/home.png" alt="Home image"/><p>Home</p></Link></li>
                        <li><Link href="/orders"><img src="/icons/order.png" alt="Notes image"/><p>Zamówienia</p></Link>
                        </li>
                        <li><Link href="/materials"><img src="/icons/materials.png" alt="Check mark image"/>
                            <p>Materiały</p></Link></li>
                    </div>
                    <div>
                        <li><Link href="/"><img src="/icons/log_out.png" alt="Arrow right image"/>
                            <p>Wyloguj się</p></Link></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}