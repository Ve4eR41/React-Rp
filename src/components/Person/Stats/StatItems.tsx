import { GoInfo } from "react-icons/go";
import Counter from "../../Counter";
import classNames from "classnames";
import { Stat } from "../../../classes/Person";



interface StatItemsProps {
    stat: Stat;
    count: number;
    className?: string;
    onStatChanged: (newValue: number) => void;
    isNoViewBaseLvl?: boolean;
}



function StatItems({ stat, count, className, onStatChanged, isNoViewBaseLvl }: StatItemsProps) {
    const { label, descript, base } = stat;
    const isEditModeOn = true;

    const classes = classNames(
        'w-full my-2 relative grid grid-cols-[5fr_1fr_auto] items-center',
        className,
    );


    return (
        <div className={classes}>

            <div className="flex items-center">
                <span className="hidden-item-parent">
                    <GoInfo size={20} className="px-1 opacity-50" />
                    <div className="absolute z-10 text-[10px] bg-slate-600 text-white rounded-md w-max h-6 px-3 py-1 top-0">{descript}</div>
                </span>
                <p>{label}</p>
            </div>

            {!isNoViewBaseLvl && <p> {base + count}</p>}

            {isEditModeOn && <Counter count={count} onStatChanged={onStatChanged} />}
        </div >
    )
}
export default StatItems 