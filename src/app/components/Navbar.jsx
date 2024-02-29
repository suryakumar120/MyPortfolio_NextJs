"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navlink from "./Navlink";
function Navbar(){
    const [open,setOpen] = useState(false);
    const handleOpen =()=>{
        setOpen((prev)=> !prev);
    }
    const links = [
        {url:'/',title:'Home'},
        {url:'/about',title:'About'},
        {url:'/portfolio',title:'Portfolio'},
        {url:'/contact',title:'Contact me'},
    ]
    return(
    <div className="navbar py-4 px-4 sm:px-8 md:px-10 lg:px-14 xl:px-20 flex">
        {/* ---Links --- Large Device--- */}

        <div className="hidden md:flex flex-row  justify-center items-center gap-4 w-1/3">
         {links.map((link)=>(
                <Navlink link={link} key={link.title}/>
            ))}
        </div>

        {/* ----Logo----- */}
        <div className="dev_logo md:hidden lg:flex justify-center items-center lg:w-1/3">
            <Link href="/" className="text-sm p-1 bg-black rounded-md font-semibold flex justify-center items-center ">
                <span className="text-white mr-1">Surya</span>
                <span className="bg-white rounded w-8 h-8 flex justify-center items-center">.dev</span>
            </Link>
        </div>

        {/* ----Menu----- */}
        <div className="menu w-10 h-7 flex flex-col justify-between z-50 md:hidden" onClick={handleOpen}>
            <div className="w-10 h-1 bg-white rounded "></div>
            <div className="w-10 h-1 bg-white rounded "></div>
            <div className="w-10 h-1 bg-white rounded "></div>
        </div>

        {/* ----Menu Opened---- */}
        { open&&(
            <div className="absolute w-screen h-screen bg-black text-white top-0 left-0 flex flex-col items-center justify-center gap-4 text-4xl">
            {links.map((link)=>(
                <Link href={link.url} key={link.title}>{link.title}</Link>
            ))}
        </div>
        )
        }


        {/* ---- Social - Icons ---- */}
        <div className="hidden md:flex flex-row justify-center items-center gap-4 lg:w-1/3">
            <Link href='#'><Image src="/github.png" height={30} width={30} alt="..."/></Link>
            <Link href='#'><Image src="/dribbble.png" height={30} width={30} alt="..."/></Link>
            <Link href='#'><Image src="/linkedin.png" height={30} width={30} alt="..."/></Link>
            <Link href='#'><Image src="/instagram.png" height={30} width={30} alt="..."/></Link>
            <Link href='#'><Image src="/facebook.png" height={30} width={30} alt="..."/></Link>

        </div>
        
    </div>)
}
export default Navbar