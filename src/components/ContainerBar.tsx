import { ReactNode } from "react";


const ContainerBar = ({children}: {children: ReactNode}) => {
    return ( 
        <div className="max-w-[1920px] mx-auto px-4 md:px-20">
            {children}
        </div>
     );
}
 
export default ContainerBar;