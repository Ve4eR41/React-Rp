import Button from "./Button"
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";

const styleButtn = "text-white h-[20px] w-[20px] box-border opacity-100 hover:opacity-80 "



interface CounterProps {
    count: number;
    onStatChanged: (newValue: number) => void;
    isMinDisable?: boolean;
    isMaxDisable?: boolean;
}



function Counter({ count, onStatChanged, isMinDisable, isMaxDisable }: CounterProps) {

    return (
        <div className="flex h-full justify-center items-center ">

            <div className={styleButtn}>
                <Button onClick={() => { onStatChanged(count - 1) }} disable={count <= 0 || isMinDisable} circle className='bg-slate-500 ' ><TiMinus size={16} /></Button>
            </div>

            <span className=" w-8 flex justify-center ">{count}</span>

            <div className={styleButtn}>
                {<Button onClick={() => { onStatChanged(count + 1) }} disable={count >= 100 || isMaxDisable} circle className='bg-slate-500' ><TiPlus size={16} /></Button>}
            </div>

        </div>
    )
}
export default Counter 