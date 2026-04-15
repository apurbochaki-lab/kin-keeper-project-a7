"use client";
import { useState } from "react";
import { CheckInContext } from "./CheckInContext";

const CheckInProvider = ({ children }) => {
    const [call, setCall] = useState([])
    const [text, setText] = useState([])
    const [video, setVideo] = useState([])

    const [timelineData, setTimelineData] = useState([])
    console.log(timelineData.length)

    const data = {
        call,
        text,
        video,
        setCall,
        setText,
        setVideo,
        timelineData,
        setTimelineData
    };

    return (
        <CheckInContext.Provider value={data}>
            {children}
        </CheckInContext.Provider>
    )
}

export default CheckInProvider;