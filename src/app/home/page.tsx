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
                        <Header text={"Witaj!"}/>
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