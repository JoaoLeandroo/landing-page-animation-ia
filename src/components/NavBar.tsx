import ContainerBar from "./ContainerBar";

const NavBar = () => {
    return ( 
        <header className="w-full shadow text-white font-medium">
            <ContainerBar>
                <div className="h-14">
                    <span>My header</span>
                </div>
            </ContainerBar>
        </header>
     );
}
 
export default NavBar;