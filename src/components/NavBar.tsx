import ContainerBar from "./ContainerBar";
import Image from "next/image";

const NavBar = () => {
    return ( 
        <header className="w-full shadow text-white font-medium mb-3">
            <ContainerBar>
                <div className="h-14 flex items-center">
                    <span className="flex items-center gap-3">
                        <Image
                            src={"/icons/star.gif"}
                            width={40}
                            height={20}
                            alt="Star logo"
                            className="cursor-pointer"
                        />
                        Ia Generate
                    </span>
                </div>
            </ContainerBar>
        </header>
     );
}
 
export default NavBar;