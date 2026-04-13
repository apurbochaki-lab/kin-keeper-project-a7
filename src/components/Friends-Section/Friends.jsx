import Friend from "./Friend";

const Friends = async() => {
    const res = await fetch("http://localhost:3000/data.json", {
        cache: "no-store"
    })
    const friends = await res.json();
    // console.log(friends)
    return (
        <section className="py-20 ">
            <h2 className="text-xl font-bold ml-5">Your Friends</h2>

            <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </section>
    );
};

export default Friends;