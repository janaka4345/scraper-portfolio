import Image from "next/image";
import { Button } from "../ui/button";
import MobileNavmenu from "./MobileNavmenu";
import Link from "next/link";

const navMenu = [{
    item: "Home",
    url: "/"
},
{
    item: "About",
    url: "//#about"
},
{
    item: "Services",
    url: "//#services"
},
{
    item: "Projects",
    url: "//#projects"
}
]

export default function Navbar() {
    return (
        <nav className="bg-transparent bg-white h-[10svh] fixed w-full z-20 top-0 start-0 ">
            <div className=" flex flex-wrap h-full my-auto items-center justify-between mx-4 p-1">
                <Link href="/" className="flex hover:scale-110 transition-all duration-150 items-center space-x-3 ">
                    <Image src='/logo_new.png' width={50} height={50} alt="logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">Scrape Labs</span>
                </Link>
                <div className="flex flex-row justify-center items-center md:order-2  space-x-3 md:space-x-0 ">
                    <Button type="button" className="text-white hover:scale-110 transition-all duration-150   focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">Connect With Us</Button>
                    <MobileNavmenu />
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  md:space-x-8  md:flex-row md:mt-0 md:border-0  ">
                        {navMenu.map(item => (
                            <li key={item.item}>
                                <Link href={item.url} className="block py-2 px-3  rounded md:bg-transparent text-primary md:p-0  hover:scale-110 transition-all duration-150" aria-current="page">{item.item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    )
}