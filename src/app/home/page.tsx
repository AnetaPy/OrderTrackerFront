import React from "react";
import './page.css';
import 'react-calendar/dist/Calendar.css';
import {Navigation} from "@/components/common/Navigation";
import {HomeCalendar} from "@/components/home/HomeCalendar/HomeCalendar";
import {HomeActualOrder} from "@/components/home/HomeActualOrder/HomeActualOrder";
import {AddMaterial} from "@/components/common/Add/AddMaterial/AddMaterial";
import {AddOrder} from "@/components/common/Add/AddOrder/AddOrder";

const Home = () => {

    return (
        <div className="Home">
            <Navigation/>
            <div className="Home_container">
                <div className="Home_header">
                    <h1>Witaj Aneta!</h1>
                    <h2>Od czego dzisiaj zaczynamy?</h2>
                </div>
                <div className="Home_wrapper">
                    <HomeCalendar/>
                    <HomeActualOrder/>
                    <AddMaterial/>
                    <AddOrder/>
                </div>
            </div>
        </div>
    )
}

export default Home;