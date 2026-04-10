"use client";
import { CheckInContext } from "@/context/CheckInContext";
import { useContext } from "react";
import { FiVideo } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { PiPhoneCallBold } from "react-icons/pi";

const CheckIn = ({ name, id }) => {
    const { call, text, video, setCall, setText, setVideo } = useContext(CheckInContext);

    const handleCall = () => {
        // console.log("Call btn clicked")
        const isExist = call.find(c => c.id === id)
        if (!isExist) {
            setCall([...call, { id, name, type: "Call", date: new Date() }]);
        }
        console.log(call)
    }

    const handleText = () => {
        // console.log("Text btn clicked")
        const isExist = text.find(t => t.id === id)
        if (!isExist) {
            setText([...text, { id, name, type: "Text", date: new Date() }]);
        }
        console.log(text)
    }

    const handleVideo = () => {
        // console.log("Video btn clicked")
        const isExist = video.find(v => v.id === id)
        if (!isExist) {
            setVideo([...video, { id, name, type: "Video", date: new Date() }]);
        }
        console.log(video)
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