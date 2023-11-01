"use client"

import React from "react";
import './page.css';
import 'react-calendar/dist/Calendar.css';
import {Navigation} from "@/components/common/Navigation/Navigation";
import {HomeCalendar} from "@/components/home/HomeCalendar/HomeCalendar";
import {HomeActualOrder} from "@/components/home/HomeActualOrder/HomeActualOrder";
import {AddMaterial} from "@/components/common/Add/AddMaterial/AddMaterial";
import {AddOrder} from "@/components/common/Add/AddOrder/AddOrder";
import {Header} from "@/components/common/Header/Header";

const Home = () => {

    return (
        <div className="Home">
            <Navigation/>
            <div className="Home_container">
                <Header text="Witaj Aneta!"/>
                <div className="Home_wrapper">
                    <HomeCalendar/>
                    <HomeActualOrder id="13d02494-77cf-11ee-9ece-34cff6159130"/>
                    <AddMaterial/>
                    <AddOrder/>
                </div>
            </div>
        </div>
    )
}

export default Home;