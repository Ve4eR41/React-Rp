import Counter from "../../Counter";
import HiddenInfo from "../../HiddenInfo";
import classNames from "classnames";
import { Stat } from "../../../classes/Person";



interface StatItemsProps {
    stat: Stat;
    count: number;
    isMinDisable?: boolean;
    isMaxDisable?: boolean;
    onStatChanged: (newValue: number) => void;

    className?: string;
    isNoViewBaseLvl?: boolean;
}



function StatItem({ stat, count, className, onStatChanged, isNoViewBaseLvl, isMinDisable, isMaxDisable }: StatItemsProps) {
    const { label, description: descript, base } = stat;
    const isEditModeOn = true;



    const classes = classNames(
        'w-full my-2 relative grid grid-cols-[5fr_1fr_auto] items-center',
        className,
    );



    return <div className={classes}>

        <div className="flex items-center">
            <HiddenInfo isIcon descript={descript} />
            <p>{label}</p>
        </div>

        {!isNoViewBaseLvl && <p> {base + count}</p>}

        {isEditModeOn && <Counter
            isMinDisable={isMinDisable}
            isMaxDisable={isMaxDisable}
            count={count}
            onStatChanged={onStatChanged}
        />}


    </div >
}
export default StatItem 