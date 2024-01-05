"use client";
import React, { useState } from "react";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SearchIcon from '@mui/icons-material/Search';
import Logo from "./Logo";
import SearchSVG from "./SVG/SearchSVG";
import Categories from "./SVG/Categories";
import Cart from "./SVG/Cart";
import { Slide } from "react-awesome-reveal";

function Navbar() {
    const [toggle, settoggle] = useState(false);

    const Toggle = () => {
        settoggle(!toggle);
    };
    const navlinkcss =
        "text-[15px] font-medium hover:underline decoration-black decoration-2 underline-offset-8";
    const mobNavlinkcss =
        "text-[25px] font-medium hover:underline decoration-black decoration-2 underline-offset-8";

    return (
        <>
            <nav className="relative">
                <div className="flex w-full z-40 bg-white  fixed flex-row  justify-between xl:px-[155px] items-center py-2 px-[30px]">
                    <div>
                        <Link href={"/"}>
                            <Logo />
                        </Link>
                    </div>
                    <div className="lg:block hidden">
                        <ul className="flex flex-row gap-4">
                            <li className={navlinkcss}>
                                Home
                            </li>
                            <li className={navlinkcss}>
                                Courses
                            </li>
                            <li className={navlinkcss}>
                                Shop
                            </li>
                            <li className={`${navlinkcss}`}>
                                blogs
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-row gap-5">
                        <button className='lg:flex hidden flex-row items-center gap-2 border-2 mx-2 text-xs text-purple-700 font-[600] uppercase border-purple-500 rounded-lg px-5 py-2'><SearchSVG /> Search for course</button>

                        <button className='bg-[#F5E1FF] lg:flex hidden flex-row items-center font-[600] border-2 border-transparent gap-2 text-[#8708C2] text-xs rounded-lg px-5 py-2'><Categories /> Categories</button>
                        <div className="lg:block relative ">
                            <button className='bg-[#FAEFFF] rounded-lg p-2'><Cart /></button>
                            <p className="md:w-5 md:h-5 w-4 h-4 -top-2 -right-2 bg-[#8708C2] text-white absolute md:px-[6px] md:py-[3px] px-[4px] text-xs font-medium rounded-full">0</p>
                        </div>
                        <button className='bg-[#8708C2] text-sm uppercase text-white px-3 py-2 md:px-5 md:py-3 font-medium rounded-[11px]'>Login</button>
                        <button
                            onClick={Toggle}
                            className="text-black block lg:hidden Hamburger "
                        >
                            {toggle ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
                        </button>
                    </div>
                </div>
            </nav>
            {toggle && (
                <Slide direction="right"
                    className="p-10 z-10 pl-10 duration-1000 delay-300 ease-in-out pt-36 fixed bg-white w-[100vw] h-[100vh]"
                >
                    <div className="">
                        <div className="lg:hidden block">
                            <ul className="flex flex-col gap-4">
                                <li className={navlinkcss}>
                                    Home
                                </li>
                                <li className={navlinkcss}>
                                    Courses
                                </li>
                                <li className={navlinkcss}>
                                    Shop
                                </li>
                                <li className={`${navlinkcss}`}>
                                    blogs
                                </li>
                            </ul>
                        </div>

                        <div className="lg:hidden block flex-col my-2">
                            <button className='flex flex-row items-center gap-2 border-2 text-xs text-purple-700 font-[600] uppercase border-purple-500 my-3 rounded-lg px-5 py-2'><SearchSVG /> Search for course</button>

                            <button className='bg-[#F5E1FF] flex flex-row items-center font-[600] border-2 border-transparent gap-2 my-3 text-[#8708C2] text-xs rounded-lg px-5 py-2'><Categories /> Categories</button>
                        </div>
                    </div >

                </ Slide>
            )
            }
        </>
    );
}

export default Navbar;