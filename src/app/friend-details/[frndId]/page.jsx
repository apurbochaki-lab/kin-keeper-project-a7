import Image from "next/image";
import { FiVideo } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { PiPhoneCallBold } from "react-icons/pi";
import { RiArchiveLine, RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";

const page = async ({ params }) => {
    const { frndId } = await params;
    // console.log(frndId)

    // const res = await fetch("http://localhost:3000/data.json", {
    //     cache: "no-store"
    // })
    const res = await fetch("https://kin-keeper-project-a7.vercel.app/data.json")
    const friendDetails = await res.json();
    // console.log(friendDetails)

    const details = friendDetails.find(detail => detail.id === Number(frndId))
    const { picture, name, status, tags, days_since_contact, goal, next_due_date, position, type } = details;
    // console.log(details)

    return (
        <section className='mt-5 mb-10 md:py-15 md:mb-0 container mx-auto '>
            <div className="grid  grid-cols-1 md:grid-cols-3 md:gap-5 m-5 ">
                {/* Left Side */}
                <div className="col-span-1 mb-5 mx-auto">
                    {/* Card */}
                    <div className=" border border-gray-300/70 rounded-xl shadow-md flex flex-col justify-center items-center p-7 space-y-3">
                        <Image src={picture} width={90} height={90} alt={name} className="rounded-full"></Image>
                        <h2 className="text-xl font-bold">{name}</h2>

                        <h2 style={{ textTransform: "capitalize" }} className={`badge rounded-full p-[15px] text-white font-medium ${status === 'almost due' ? "bg-[#EFAD44]" : status === 'overdue' ? "bg-red-600" : "bg-[#244D3F]"}`}>{status}</h2>

                        <div className="flex gap-4 flex-wrap">
                            {
                                tags.map((tag, ind) => <h2 key={ind} className="badge rounded-full bg-[#CBFADB] font-medium p-[15px]">
                                    {tag.toUpperCase()}
                                </h2>)
                            }
                        </div>
                        <h2 className="italic text-[#64748B]">&quot; {position} &quot;</h2>
                        <p className="text-[#64748B]"><small>Type : {type}</small></p>
                    </div>

                    <div className="mt-5">
                        <button className="btn shadow-sm w-full mb-3"><RiNotificationSnoozeLine />Snooze 2 Weeks</button>
                        <button className="btn shadow-sm w-full mb-3"><RiArchiveLine />Archive</button>
                        <button className="btn shadow-sm w-full text-red-500"><RiDeleteBinLine />Delete</button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="col-span-2">
                    <div className="grid sm:grid-cols-3 gap-5">
                        <div className=" bg-white p-6 h-40 rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.10)]  text-center flex justify-center items-center">
                            <span>
                                <h2 className="text-3xl font-bold mb-3">{days_since_contact}</h2>
                                <h2 className=" text-[#64748B] text-xl">Days Since Contact</h2>
                            </span>
                        </div>
                        <div className=" bg-white p-6 h-40 rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.10)]  text-center flex justify-center items-center">
                            <span>
                                <h2 className="text-3xl font-bold mb-3">{goal}</h2>
                                <h2 className=" text-[#64748B] text-xl">Goal (Days)</h2>
                            </span>
                        </div>
                        <div className=" bg-white p-6 h-40 rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.10)]  text-center flex justify-center items-center">
                            <span>
                                <h2 className="text-3xl font-bold mb-3">
                                    {new Date(next_due_date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric"
                                    }) }</h2>
                                <h2 className=" text-[#64748B] text-xl">Next Due</h2>
                            </span>
                        </div>
                    </div>

                    <div className="mt-5 shadow-sm bg-white p-5 rounded-lg flex justify-between">
                        <div className="space-y-3">
                            <h2 className="text-xl font-semibold text-black/60">Relationship Goal</h2>
                            <h2 className="text-[#64748B]">Connect every <span className="font-bold text-black">30 Days</span></h2>
                        </div>
                        <button className="btn">Edit</button>
                    </div>

                    <div className="mt-5 bg-white p-5 rounded-lg shadow-sm ">
                        <h2 className="text-xl font-bold text-black/60 py-5">Quick Check-In</h2>
                        <div className="grid grid-cols-3 gap-7">
                            <button className=" btn h-30 bg-[#F8FAFC] p-6 rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.10)]  text-center flex justify-center items-center">
                                <span>
                                    <h2 className="text-3xl flex justify-center mb-3 "><PiPhoneCallBold /></h2>
                                    <h2 className=" text-[#64748B] text-xl">Call</h2>
                                </span>
                            </button>
                            <button className="btn h-30 bg-[#F8FAFC] p-6 rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.10)]  text-center flex justify-center items-center">
                                <span>
                                    <h2 className="text-3xl mb-3 flex justify-center"><LuMessageSquareMore /></h2>
                                    <h2 className=" text-[#64748B] text-xl">Text</h2>
                                </span>
                            </button>
                            <button className="btn h-30 bg-[#F8FAFC] p-6 rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.10)]  text-center flex justify-center items-center">
                                <span>
                                    <h2 className="text-3xl flex justify-center mb-3"><FiVideo /></h2>
                                    <h2 className=" text-[#64748B] text-xl">Video</h2>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;