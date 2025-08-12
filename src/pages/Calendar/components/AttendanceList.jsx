import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './calendar.css';


export default function Attendence() {
    const [value, setValue] = useState(new Date());
    const navigate = useNavigate();

    const handleDateChange = (selectedDate) => {
        setValue(selectedDate);
        const dateString = selectedDate.toISOString().split("T")[0]; // yyyy-mm-dd
        navigate(`/date/${dateString}`);
    };

    return (
        <div className="w-full rounded-b-[25px] shadow-2xl pb-[40px] flex justify-center">
        <Calendar 
            onChange={handleDateChange}
            value={value}
            locale="ko-KR"
            calendarType="gregory"
            formatDay={(locale, date) => date.getDate()}
        />
        </div>
    );
}
