"use client";
import { Calendar } from 'react-calendar'
import {useState} from "react";
import './MyCalendar.css';

export const MyCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const date = new Date();
    function getDate(date: Date | string) {
        setCurrentDate(new Date(date))
    }

    const events = [
        {
            title: "one",
            date: date
        }
    ]
    return (
        <Calendar
            onChange={(value: Date) => {
                const calendarCurrentDate = new Date(value)
                getDate(calendarCurrentDate)
            }}
            value={date}
            locale="pl"

        />
    )
}