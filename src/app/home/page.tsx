import './page.css';
import 'react-calendar/dist/Calendar.css';
import {MyCalendar} from "@/components/MyCalendar/MyCalendar";


const Home = () => {

    return (
        <div className="Home">
            <div className="Home_navigation"></div>
            <div className="Home_container">
                <div className="Home_header">
                    <h1>Witaj Aneta!</h1>
                    <h2>Od czego dzisiaj zaczynamy?</h2>
                </div>
                <div className="Home_wrapper">
                    <div className="Home_calendar">
                        {/*<Calendar/>*/}
                        <MyCalendar/>
                    </div>
                    <div className="Home_actual_order"></div>
                    <div className="Home_add_material"></div>
                    <div className="Home_add_order"></div>
                </div>
            </div>
        </div>
    )
}

export default Home;
