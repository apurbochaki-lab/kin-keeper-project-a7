'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineQueryStats } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import logoImg from '@/assets/logo.png'

const Navbar = () => {

    const pathName = usePathname()
    // console.log(pathName, "pathName")

    const links =
        <>
            <li><Link href={"/"} className={`font-semibold ${pathName === '/' && "bg-[#244D3F] text-white"}`}><RiHome2Line />Home</Link></li>
            <li><Link href={"/timeline"} className={`font-semibold ${pathName === '/timeline' && "bg-[#244D3F] text-white"}`}><FaRegClock />Timeline</Link></li>
            <li><Link href={"/stats"} className={`font-semibold ${pathName === '/stats' && "bg-[#244D3F] text-white"}`}><MdOutlineQueryStats />Stats</Link></li>
        </>


    return (
        <section className="bg-base-100 shadow-sm sticky inset-0">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Image
                        src={logoImg}
                        height={120}
                        width={120}
                        alt="Brand Logo"
                    ></Image>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navbar;