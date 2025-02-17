import classNames from "classnames";
interface PointPanelProps {
    isHp?: boolean;
    isMp?: boolean;
    isSp?: boolean;
    isCrit?: boolean;
    point: number;
    maxPoint: number;

    className?: string;
    isNoValue?: boolean;
}

function Point({ isHp, isMp, isSp, point, maxPoint, isCrit, className, isNoValue, ...rest }: PointPanelProps) {
    const inBoxStyle = 'z-2 relative p-0.5 px-2 font-medium'
    const classes = classNames(className, "flex justify-between items-center border text-xs rounded-full w-18  min-w-8 min-h-4  bg-gray-200 relative overflow-hidden")
    const boxStyle = classNames(
        'z-1 absolute h-full rounded-full',
        {
            'bg-red-500': isHp,
            'bg-green-500': isSp,
            'bg-blue-500': isMp,
            'bg-indigo-500': isCrit,
        }
    );



    const value = !isNoValue && <>
        <div className={inBoxStyle}>{point}</div>
        <span className="z-2 relative py-0.5 ">/</span>
        <div className={inBoxStyle}>{maxPoint}</div>
    </>;



    return <div {...rest} className={classes}>
        <div className={boxStyle} style={{ width: `${point / maxPoint * 100}%` }} ></div>
        {value}
    </div >
}
export default Point 