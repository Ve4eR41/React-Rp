import classNames from "classnames";
import Panel from "../../Panel"
import StatItem from "./StatItem.tsx";
import { PersonChartersProps, PersonSkillsProps, Stat, Charters } from "../../../classes/Person";
import Point from "../../Point.tsx";



interface StatsList {
    stats: { [key: string]: Stat } | Charters;
    onStatChanged: React.Dispatch<React.SetStateAction<PersonSkillsProps>> | React.Dispatch<React.SetStateAction<PersonChartersProps>>;
    personProps: PersonSkillsProps | PersonChartersProps;

    minLimit?: number;
    maxLimit?: number;
    isMinDisable?: boolean;
    isMaxDisable?: boolean;
    limitPoints?: number;
    curPoints?: number;
    headers?: string;

    className?: string;
    isCleanStyle?: boolean;
    isNoViewBaseLvl?: boolean;
    isHorizon?: boolean;
    isBorder?: boolean;
    isEven?: boolean;
}



function StatsList({ stats, onStatChanged, personProps, className, isCleanStyle, isHorizon, isNoViewBaseLvl, isBorder, isEven, isMinDisable, isMaxDisable, limitPoints, curPoints, headers
}: StatsList) {
    const classes = classNames({
        'border rounded-full gap-1 ': isBorder,
        'even:bg-slate-100': isEven,
    })



    const renderCharters = Object.values(stats).map((el) => {
        const statId = el.id as keyof PersonChartersProps;
        return < StatItem key={statId}
            className={classes}
            isNoViewBaseLvl={isNoViewBaseLvl}
            stat={el}
            isMinDisable={isMinDisable}
            isMaxDisable={isMaxDisable}
            onStatChanged={(newValue) => onStatChanged({ ...personProps, [statId]: newValue })}
            count={personProps[statId] || 0} />
    })




    const header = headers || (limitPoints) ?
        <div className="w-full flex items-center justify-between">
            <h1 className="text-xl font-bold mr-2 ">{headers}</h1>
            {limitPoints ? <Point maxPoint={limitPoints} point={curPoints || 0} className="bg-orange-500" /> : null}
        </div>
        : null

    return <Panel isCleanStyle={isCleanStyle} className={className} >
        <>
            {header}
            <div className={isHorizon ? "p-0 flex items-start justify-between gap-3" : ""}>
                {renderCharters}
            </div>
        </>
    </Panel>
}
export default StatsList 