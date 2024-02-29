import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
function Navlink({link}){
    const pathName = usePathname();
    return(
    <div className={`text-lg rounded p-1 whitespace-nowrap ${pathName === link.url ?'bg-black text-white':''}`}>
             <Link href={link.url} >{link.title}</Link>
    </div>
   )
}

export default Navlink;