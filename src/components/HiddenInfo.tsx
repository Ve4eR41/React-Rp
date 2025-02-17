import { JSX } from "react"
import { GoInfo } from "react-icons/go"

interface HiddenInfoProps {
    children?: string | JSX.Element | JSX.Element[];
    descript: string;
    isIcon?: boolean;
}

function HiddenInfo({ descript, isIcon, children }: HiddenInfoProps) {


    // ------------------------------------------------------
    return <span className="hidden-item-parent">
        {isIcon && <GoInfo size={20} className="px-1 opacity-50" />}
        {children}
        <div className="hidden-item-children absolute z-10 text-[10px] bg-slate-600 text-white rounded-md w-max h-6 px-3 py-1 top-0">{descript}</div>
    </span>

}
export default HiddenInfo 