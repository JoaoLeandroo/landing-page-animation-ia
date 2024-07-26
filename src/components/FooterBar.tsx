import ContainerBar from "./ContainerBar";

const FooterBar = () => {
    return ( 
        <footer className="w-full">
            <ContainerBar>
                <div className="h-14 flex items-center justify-center">
                    <p className="text-lg font-medium">&copy; Todos os direitos reservados</p>
                </div>
            </ContainerBar>
        </footer>
     );
}
 
export default FooterBar;