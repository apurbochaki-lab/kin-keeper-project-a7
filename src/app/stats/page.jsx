"use client"
import { CheckInContext } from "@/context/CheckInContext";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {

    const {call, text, video} = useContext(CheckInContext)

    // #region Sample data
    const data = [
        { name: 'Call', value: call.length, fill: '#7F37F5' },
        { name: 'Text', value: text.length, fill: '#244D3F' },
        { name: 'Video', value: video.length, fill: '#37A163' }
    ];

    // No chart show logic
    const showData = call.length || text.length || video.length;
    

    return (
        <section className="container mx-auto">
            <div className="m-10 md:m-20">
                <h2 className="text-3xl font-bold mb-5">Friendship Analytics</h2>

                {!showData ? <h2 className="text-center text-3xl font-semibold py-15 text-black/60">No Data to show...</h2> : <div className="border border-gray-300/60 shadow-md rounded-xl p-5 bg-white ">
                    <p className="font-semibold text-black/60">By Interaction Type</p>

                    <div className="flex justify-center items-center py-10">
                        <PieChart style={{ width: '100%', maxWidth: '320px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Legend wrapperStyle={{paddingTop: "30px"}}></Legend>
                            <Tooltip></Tooltip>
                        </PieChart>

                    </div>
                </div>}
            </div>
        </section>
    );
};

export default StatsPage;