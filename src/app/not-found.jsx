import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4">

            {/* Animated Gradient Mesh Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.25),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_40%)]"></div>

            {/* Floating Blur Orbs */}
            <div className="absolute w-[500px] h-[500px] bg-pink-500 rounded-full blur-[150px] opacity-20 top-[-150px] left-[-150px] animate-pulse"></div>
            <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] opacity-20 bottom-[-150px] right-[-150px] animate-pulse"></div>
            <div className="absolute w-[300px] h-[300px] bg-purple-500 rounded-full blur-[120px] opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping"></div>

            {/* Noise Overlay (premium feel) */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

            {/* Main Glass Card */}
            <div className="relative z-10 w-full max-w-lg text-center p-12 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-3xl shadow-[0_0_120px_rgba(236,72,153,0.25)]">

                {/* Animated Icon */}
                <div className="text-7xl mb-4 animate-bounce">
                    🧩
                </div>

                {/* Title */}
                <h1 className="text-5xl font-extrabold text-white tracking-tight">
                    Data Not Found!
                </h1>

                {/* Subtitle */}
                <p className="mt-5 text-gray-300 leading-relaxed text-sm sm:text-base">
                    The data you are looking for doesn’t exist in this universe anymore.
                    It might have been moved, deleted, or never existed at all.
                </p>

                {/* CTA Button */}
                <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-2xl font-semibold text-white
        bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
        shadow-[0_0_40px_rgba(168,85,247,0.4)]
        hover:scale-110 hover:shadow-pink-500/60 transition-all duration-300"
                >
                    <span className="font-extrabold">🚀 Take Me Home</span>
                </Link>

                {/* Footer Hint */}
                <p className="mt-6 text-xs text-gray-400 tracking-widest">
                    ERROR 404 • SIGNAL LOST • SYSTEM STATUS UNKNOWN
                </p>

            </div>
        </div>
    );
};

export default NotFoundPage;