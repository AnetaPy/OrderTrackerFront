import React from "react";
import './page.css';
import 'react-calendar/dist/Calendar.css';
import {HomeNavigation} from "@/components/home/HomeNavigation/HomeNavigation";
import {HomeCalendar} from "@/components/home/HomeCalendar/HomeCalendar";
import {HomeActualOrder} from "@/components/home/HomeActualOrder/HomeActualOrder";
import {HomeAddMaterial} from "@/components/home/HomeAddMaterial/HomeAddMaterial";
import {HomeAddOrder} from "@/components/home/HomeAddOrder/HomeAddOrder";

const Home = () => {

    return (
        <div className="Home">
            <HomeNavigation/>
            <div className="Home_container">
                <div className="Home_header">
                    <h1>Witaj Aneta!</h1>
                    <h2>Od czego dzisiaj zaczynamy?</h2>
                </div>
                <div className="Home_wrapper">
                    <HomeCalendar/>
                    <HomeActualOrder/>
                    <HomeAddMaterial/>
                    <HomeAddOrder/>
                </div>
            </div>
        </div>
    )
}

export default Home;