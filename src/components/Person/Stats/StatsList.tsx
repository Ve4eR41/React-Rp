import classNames from "classnames";
import Panel from "../../Panel"
import StatItems from "./StatItems.tsx";
import { PersonProps, Stat, Charters } from "../../../classes/Person";



interface StatsList {
    stats: { [key: string]: Stat } | Charters;
    onStatChanged: React.Dispatch<React.SetStateAction<PersonProps>> | React.Dispatch<React.SetStateAction<PersonProps>>;
    personProps: PersonProps;
    className?: string;
    isCleanStyle?: boolean;
    isNoViewBaseLvl?: boolean;
    isBorder?: boolean;
    isEven?: boolean;
}



function StatsList({ stats, onStatChanged, personProps, className, isCleanStyle, isNoViewBaseLvl, isBorder, isEven }: StatsList) {
    const classes = classNames({
        'border rounded-full m-2': isBorder,
        'even:bg-slate-100': isEven,
    })



    const renderCharters = Object.values(stats).map((el) => {
        const statId = el.id as keyof Charters;
        return < StatItems key={statId}
            className={classes}
            isNoViewBaseLvl={isNoViewBaseLvl}
            stat={el}
            onStatChanged={(newValue) => onStatChanged({ ...personProps, [statId]: newValue })}
            count={personProps[statId] || 0} />
    })



    return <Panel isCleanStyle={isCleanStyle} className={className}>
        {renderCharters}
    </Panel>
}
export default StatsList 