import Point from "./Point"



interface PointPanelProps {
    stats: {
        hp: number;
        max_hp: number;
        sp: number;
        max_sp: number;
        mp: number;
        max_mp: number;
    }
}


function PointPanel({ stats }: PointPanelProps) {
    const { hp, max_hp, sp, max_sp, mp, max_mp } = stats;
    return (
        <div className="flex  ">
            <Point isHp point={hp} maxPoint={max_hp} className="my-1" />
            <Point isSp point={sp} maxPoint={max_sp} className="my-1 mx-2" />
            <Point isMp point={mp} maxPoint={max_mp} className="my-1" />
        </div>
    )
}
export default PointPanel 