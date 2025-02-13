import classNames from "classnames";

const inBoxStyle = 'z-2 relative p-0.5 px-2'


interface PointPanelProps {
    isHp?: boolean;
    isMp?: boolean;
    isSp?: boolean;
    point: number;
    maxPoint: number;
    className?: string;
}


function Point({ isHp, isMp, isSp, point, maxPoint, className, ...rest }: PointPanelProps) {

    const boxStyle = classNames(
        'z-1 absolute h-full rounded-full ',
        {
            'bg-red-500': isHp,
            'bg-green-500': isSp,
            'bg-blue-500': isMp,
        }
    );

    const classes = classNames(className, "flex justify-between items-center border text-xs rounded-full w-18 bg-gray-200 relative overflow-hidden")


    return (
        <div {...rest} className={classes}>
            <div className={boxStyle} style={{ width: `${point / maxPoint * 100}%` }} ></div>
            <div className={inBoxStyle}>{point}</div>
            <span className="z-2 relative py-0.5 ">/</span>
            <div className={inBoxStyle}>{maxPoint}</div>
        </div >
    )
}
export default Point 