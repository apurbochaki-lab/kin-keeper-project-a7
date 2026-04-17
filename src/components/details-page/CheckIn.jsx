"use client";
import { CheckInContext } from "@/context/CheckInContext";
import { useContext } from "react";
import { FiVideo } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { PiPhoneCallBold } from "react-icons/pi";
import { toast } from "react-toastify";

const CheckIn = ({ name, id }) => {
    const { call, text, video, setCall, setText, setVideo, timelineData, setTimelineData } = useContext(CheckInContext);

    const handleCall = () => {
        // console.log("Call btn clicked")
        setCall([...call, { id, name, type: "Call", date: new Date() }]);
        toast.success(`📞 Call to ${name}`)

        setTimelineData([...timelineData, call])
    }

    const handleText = () => {
        // console.log("Text btn clicked")
        setText([...text, { id, name, type: "Text", date: new Date() }]);
        toast.success(`💬 Text to ${name}`)

        setTimelineData([...timelineData, text])
    }

    const handleVideo = () => {
        // console.log("Video btn clicked")
        // const isExist = video.find(v => v.id === id)
        // if (!isExist) {
        setVideo([...video, { id, name, type: "Video", date: new Date() }]);
        // }
        toast.success(`📹 Video to ${name}`)

        setTimelineData([...timelineData, video])
    }

    return (
        <div className="mt-5 bg-white p-5 rounded-lg shadow-sm ">
            <h2 className="text-xl font-bold text-black/60 py-5">Quick Check-In</h2>
            <div className="grid grid-cols-3 gap-7">
                <button onClick={handleCall} className=" btn h-30 bg-[#F8FAFC] p-6 rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.10)]  text-center flex justify-center items-center">
                    <span>
                        <h2 className="text-3xl flex justify-center mb-3 "><PiPhoneCallBold /></h2>
                        <h2 className=" text-[#64748B] text-xl">Call</h2>
                    </span>
                </button>
                <button onClick={handleText} className="btn h-30 bg-[#F8FAFC] p-6 rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.10)]  text-center flex justify-center items-center">
                    <span>
                        <h2 className="text-3xl mb-3 flex justify-center"><LuMessageSquareMore /></h2>
                        <h2 className=" text-[#64748B] text-xl">Text</h2>
                    </span>
                </button>
                <button onClick={handleVideo} className="btn h-30 bg-[#F8FAFC] p-6 rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.10)]  text-center flex justify-center items-center">
                    <span>
                        <h2 className="text-3xl flex justify-center mb-3"><FiVideo /></h2>
                        <h2 className=" text-[#64748B] text-xl">Video</h2>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CheckIn;