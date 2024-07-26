import ContainerBar from "./ContainerBar";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    return ( 
        <header className="w-full shadow text-white font-medium mb-3">
            <ContainerBar>
                <nav className="h-14 flex items-center justify-between">
                        <Link href={"/"} className="h-full flex items-center gap-1">
                            <Image
                                src={"/icons/star.gif"}
                                width={40}
                                height={20}
                                alt="Star logo"
                                className="cursor-pointer"
                            />
                            <span className="text-lg">
                                Ia Generate
                            </span>
                        </Link>

                        <div className="gap-x-5 font-light hidden lg:flex">
                            <Link className="hover:font-medium hover:underline-offset-8 hover:underline transition duration-200" href={"#"}>Home</Link>
                            <Link className="hover:font-medium hover:underline-offset-8 hover:underline transition duration-200" href={"#"}>Generate</Link>
                            <Link className="hover:font-medium hover:underline-offset-8 hover:underline transition duration-200" href={"#"}>Gallery</Link>
                            <Link className="hover:font-medium hover:underline-offset-8 hover:underline transition duration-200" href={"#"}>Pricing</Link>
                            <Link className="hover:font-medium hover:underline-offset-8 hover:underline transition duration-200" href={"#"}>About Us</Link>
                        </div>

                        <div className="flex h-full items-center gap-x-3">
                            <Link href={"#"} className="px-6 py-2 bg-zinc-400/40 border border-white rounded-full hover:opacity-85 transition duration-300">
                                Sign in
                            </Link>
                            <div className="block lg:hidden">
                                <GiHamburgerMenu size={30} className="cursor-pointer"/>
                            </div>
                        </div>
                </nav>
            </ContainerBar>
        </header>
     );
}
 
export default NavBar;