import Image from "next/image";

const Friend = ({ friend }) => {
    const { picture, name, days_since_contact, tags, status } = friend;
    console.log(friend)
    return (
        // Card
        <div className=" border border-gray-300/70 rounded-xl shadow-md flex flex-col justify-center items-center p-7 space-y-3">
            <Image src={picture} width={90} height={90} alt={name} className="rounded-full"></Image>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-black/60 font-medium">{days_since_contact}d ago</p>
            <div className="flex gap-4 flex-wrap">
                {
                    tags.map((tag, ind) => <h2 key={ind} className="badge rounded-full bg-[#CBFADB] font-medium p-[15px]">
                        {tag.toUpperCase()}
                    </h2>)
                }
            </div>
            <h2 style={{textTransform: "capitalize"}} className={`badge rounded-full p-[15px] text-white font-medium ${status === 'almost due' ? "bg-[#EFAD44]" : status === 'overdue' ? "bg-red-600" : "bg-[#244D3F]"}`}>{status}</h2>
        </div>
    );
};

export default Friend;