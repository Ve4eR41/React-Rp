import { JSX, useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

interface ExpendabPanelProps {
    header: string;
    children: JSX.Element;
}


function ExpendabPanel({ header, children }: ExpendabPanelProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    // ------------------------------------------------------
    const hClick = () => { setIsExpanded(!isExpanded) };

    // ------------------------------------------------------
    return <div className=" mb-2 border rounded">
        <div className="flex p-2 justify-between items-center">
            <div className="flex justify-between items-center ">
                {header}
            </div>
            <div onClick={hClick} className="cursor-pointer"> {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</div>
        </div>
        {
            isExpanded &&
            <div className="p-2 border-t">
                {children}
            </div>
        }
    </div>

}
export default ExpendabPanel 