import Friends from "@/components/Friends-Section/Friends";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <section className="mt-10 container mx-auto">
      {/* Header Part */}
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold">Friends to keep close in your life</h2>
        <p className="text-black/60 p-1">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
          relationships that matter most.</p>
        <button className="mt-3 btn bg-[#244D3F] text-white"><FaPlus />Add a Friend</button>
      </div>

      {/* Static Card Part */}
      <section className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        <div className="bg-white p-6 h-40 rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.10)]  text-center flex justify-center items-center">
          <span>
            <h2 className="text-3xl font-bold mb-3">10</h2>
            <h2 className="font-semibold text-black/50">Total Friends</h2>
          </span>
        </div>
        <div className="bg-white p-6 h-40 rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.10)] text-center flex justify-center items-center">
          <span>
            <h2 className="text-3xl font-bold mb-3">3</h2>
            <h2 className="font-semibold text-black/50">On Track</h2>
          </span>
        </div>
        <div className="bg-white p-6 h-40 rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.10)] text-center flex justify-center items-center">
          <span>
            <h2 className="text-3xl font-bold mb-3">6</h2>
            <h2 className="font-semibold text-black/50">Need Attention</h2>
          </span>
        </div>
        <div className="bg-white p-6 h-40 rounded-lg shadow-[0_1px_8px_rgba(0,0,0,0.10)] text-center flex justify-center items-center">
          <span>
            <h2 className="text-3xl font-bold mb-3">12</h2>
            <h2 className="font-semibold text-black/50">Interactions This Month</h2>
          </span>
        </div>
        

      </section>

      {/* Your Friends Section */}
      <Friends></Friends>
    </section>
  );
}
