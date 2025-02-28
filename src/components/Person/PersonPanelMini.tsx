import { FaUser } from "react-icons/fa"
import Panel from "../Panel"
import PointPanel from "../PointPanel.tsx"
import classNames from "classnames";

interface PersonPanelMiniProps {
    person: {
        hp: number;
        max_hp: number;
        sp: number;
        max_sp: number;
        mp: number;
        max_mp: number;
        lvl: number;
        name: string;
    };
    className?: string;
}

function PersonPanelMini({ person, className }: PersonPanelMiniProps) {
    const { hp, max_hp, sp, max_sp, mp, max_mp, lvl, name } = person;
    const classes = classNames(
        className,
        'flex items-center my-4 w-30 h-fit relative h-fit'
    );


    return (
        <Panel isWFull className={classes}>
            <div className="h-16 w-16 p-2 mr-3 rounded-full bg-slate-700">
                <FaUser className="w-full" color="white" />
            </div>
            <div>
                <div className="opacity-70 text-sm">lvl {lvl}</div>
                <div>{name}</div>
                <PointPanel person={{ hp, max_hp, sp, max_sp, mp, max_mp }} />
            </div>
        </Panel>
    )
}
export default PersonPanelMini 