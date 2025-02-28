import Point from "./Point"



interface PointPanelProps {
    person: {
        hp: number;
        max_hp: number;
        sp: number;
        max_sp: number;
        mp: number;
        max_mp: number;
        crit?: number;
        de_crit?: number;
    }
}


function PointPanel({ person }: PointPanelProps) {
    const { hp, max_hp, sp, max_sp, mp, max_mp, crit, de_crit } = person;

    return (
        <div className="flex  ">
            <Point isHp point={hp} maxPoint={max_hp} className="my-1 mr-2" />
            <Point isSp point={sp} maxPoint={max_sp} className="my-1 mr-2" />
            <Point isMp point={mp} maxPoint={max_mp} className="my-1 mr-2" />
            {crit && de_crit && <Point isCrit point={crit} maxPoint={de_crit} className="my-1" />}
        </div>
    )
}
export default PointPanel  