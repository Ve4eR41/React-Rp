import { BsFillPersonPlusFill } from "react-icons/bs";
import Panel from "../Panel"
import classNames from "classnames";
import Point from "../Point";
import { Link } from "react-router-dom";


function ButtonCreateNewPerson({ className }: { className: string }) {
    const classes = classNames(
        className,
        'flex items-center my-4 w-30 relative h-fit',
        'hover:opacity-50'
    );

    return (
        <Panel isWFull className={classes}>
            <Link to="/NewPerson" className="absolute z-10 inset-0 " />
            <div className="h-16 w-16 p-2 mr-3 rounded-full bg-slate-700">
                <BsFillPersonPlusFill className="w-full" color="white" />
            </div>
            <div>
                <div className="opacity-70 text-sm">lvl -</div>
                <div> New Person + </div>
                <div className="flex">
                    <Point point={0} maxPoint={0} className="my-1" />
                    <Point point={0} maxPoint={0} className="my-1 mx-2" />
                    <Point point={0} maxPoint={0} className="my-1" />
                </div>
            </div>
        </Panel>
    )
}
export default ButtonCreateNewPerson 