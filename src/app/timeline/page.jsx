"use client";
import { CheckInContext } from "@/context/CheckInContext";
import Image from "next/image";
import { useContext, useState } from "react";
import callImg from '@/assets/call.png'
import textImg from '@/assets/text.png'
import videoImg from '@/assets/video.png'

const TimelinePage = () => {
    const { call, text, video, setCall, setText, setVideo, timelineData } = useContext(CheckInContext);
    // console.log(call.length, "Length")

    const handleSortByName = () => {
        const sortedCall = [...call].sort((a, b) => a.name.localeCompare(b.name))
        setCall(sortedCall)
        const sortedText = [...text].sort((a, b) => a.name.localeCompare(b.name))
        setText(sortedText)
        const sortedVideo = [...video].sort((a, b) => a.name.localeCompare(b.name))
        setVideo(sortedVideo)
    }

    const handleSortByDate = () => {
        const sortedCall = [...call].sort((a, b) => new Date(b.date) - new Date(a.date))
        setCall(sortedCall)
        const sortedText = [...text].sort((a, b) => new Date(b.date) - new Date(a.date))
        setText(sortedText)
        const sortedVideo = [...video].sort((a, b) => new Date(b.date) - new Date(a.date))
        setVideo(sortedVideo)
    }

    // No-Data when timeline empty Logic :
    // Method 1 : Global State
    
    // Method 2 : Truthy, Falsy Logic
    // const hasData = call.length || text.length || video.length;
    //  0 || 1 || 0
    // console.log(hasData, "hasData")

    return (
        <div className="py-20 container mx-auto">
            <h2 className=" text-3xl font-bold mb-5">Timeline</h2>

            {/* {!hasData && <h2 className="text-black/60 text-3xl font-bold text-center py-20">There is no recent data!</h2> } */}

            {/* Sort Feature */}
            <div className="dropdown dropdown-bottom mb-10">
                <div tabIndex={0} role="button" className="btn m-1 w-50 bg-[#244D3F] text-white">Filter Timeline</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm bg-blue-50">
                    <li onClick={handleSortByName} className="font-semibold bg-[#244D3F] rounded-lg text-white mb-3"><a>By Name ➡️ A-Z</a></li>
                    <li onClick={handleSortByDate} className="font-semibold bg-[#244D3F] rounded-lg text-white"><a>By Date ➡️ New-Old </a></li>
                </ul>
            </div>

            {timelineData.length === 0 && <h2 className="text-black/60 text-3xl font-bold text-center py-20">There is no recent data!</h2> }

            {/* Call Cards */}
            <div className="space-y-5">
                {
                    call.map(c => <div key={c.id} className="flex items-center gap-3 bg-white p-5 rounded-lg shadow-sm">
                        <div className="shadow-sm p-3 rounded-xl">
                            <Image src={callImg} width={30} height={30} alt={c.name}></Image>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{c.type} <span className="font-normal text-[#64748B]">with {c.name}</span></h2>
                            <span className="text-[#64748B] font-semibold">{new Date(c.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                            })}</span>
                        </div>
                    </div>)
                }
            </div>

            {/* Text Cards */}
            <div className="mt-5 space-y-5">
                {
                    text.map(t => <div key={t.id} className="flex items-center gap-3 bg-white p-5 rounded-lg shadow-sm">
                        <div className="shadow-sm p-3 rounded-xl">
                            <Image src={textImg} width={30} height={30} alt={t.name}></Image>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{t.type} <span className="font-normal text-[#64748B]">with {t.name}</span></h2>
                            <span className="text-[#64748B] font-semibold">{new Date(t.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                            })}</span>
                        </div>
                    </div>)
                }
            </div>

            {/* Video Cards */}
            <div className="mt-5 space-y-5">
                {
                    video.map(v => <div key={v.id} className="flex items-center gap-3 bg-white p-5 rounded-lg shadow-sm">
                        <div className="shadow-sm p-3 rounded-xl">
                            <Image src={videoImg} width={30} height={30} alt={v.name}></Image>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{v.type} <span className="font-normal text-[#64748B]">with {v.name}</span></h2>
                            <span className="text-[#64748B] font-semibold">{new Date(v.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                            })}</span>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TimelinePage;