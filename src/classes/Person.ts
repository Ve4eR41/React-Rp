export class PersonProps {
    name: string;
    strength: number;
    agility: number;
    intell: number;
    constitut: number;
    luck: number;
    lie: number;
    convince: number;
    concentration: number;
    knowledge_magic: number;
    alchemy: number;
    herbal: number;
    meta: number;
    first_aid: number;
    doctor: number;
    sleeper: number;
    faith: number;
    reading: number;


    constructor() {

        this.name = "name";
        this.strength = 0;
        this.agility = 0;
        this.intell = 0;
        this.constitut = 0;
        this.luck = 0;
        this.lie = 0;
        this.convince = 0;
        this.concentration = 0;
        this.knowledge_magic = 0;
        this.alchemy = 0;
        this.herbal = 0;
        this.meta = 0;
        this.first_aid = 0;
        this.doctor = 0;
        this.sleeper = 0;
        this.faith = 0;
        this.reading = 0;
    }
};



export class Stat {
    base: number;
    bns: number;
    bnsItem: number;
    id: string;
    label: string;
    descript: string;

    constructor({
        base,
        bns,
        bnsItem,
        id,
        label,
        descript }: {
            base: number,
            bns: number,
            bnsItem: number,
            id: string,
            label: string,
            descript: string,
        }) {

        this.base = base
        this.bns = bns
        this.bnsItem = bnsItem
        this.id = id
        this.label = label
        this.descript = descript
    }
};



export interface Skills {
    strength: { [key: string]: Stat };
    agility: { [key: string]: Stat };
    intell: { [key: string]: Stat };
}



export interface Charters {
    strength: Stat;
    agility: Stat;
    intell: Stat;
    constitut: Stat;
    luck: Stat;
}





export class Person {
    name: string;
    id: number;
    userId: number;
    lvl: number;
    hp: number;
    max_hp: number;
    mp: number;
    max_mp: number;
    sp: number;
    max_sp: number;
    history: string;
    img: string | null;
    skills: Skills;
    charters: Charters;

    constructor({
        name,
        strength,
        agility,
        intell,
        constitut,
        luck,
        lie,
        convince,
        concentration,
        knowledge_magic,
        alchemy,
        herbal,
        meta,
        first_aid,
        doctor,
        sleeper,
        faith,
        reading,
    }: PersonProps) {
        this.name = name;
        this.id = 15;
        this.userId = 0;
        this.lvl = 1;
        this.hp = strength;
        this.max_hp = strength;
        this.mp = intell;
        this.max_mp = intell;
        this.sp = agility;
        this.max_sp = agility;
        this.history = "pupa is's son of dildo ";
        this.img = null;
        this.skills = {
            strength: {
                hth_combat: new Stat({
                    base: (strength * 2 + agility * 2), bns: 0, bnsItem: 0, id: 'hth_combat', label: "Рукопашный бой", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                shield: new Stat({
                    base: (strength * 3 + agility), bns: 0, bnsItem: 0, id: 'shield', label: "Владение щитом", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                block: new Stat({
                    base: (strength * 2 + agility * 2), bns: 0, bnsItem: 0, id: 'block', label: "Блок", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                stitching: new Stat({
                    base: (strength + agility + constitut), bns: 0, bnsItem: 0, id: 'stitching', label: "Колющие", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                rubing: new Stat({
                    base: (strength * 2 + agility * 2), bns: 0, bnsItem: 0, id: 'rubing', label: "Рубищие", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                crushing: new Stat({
                    base: (strength * 2 + constitut * 2), bns: 0, bnsItem: 0, id: 'crushing', label: "Дробящее", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                cutting: new Stat({
                    base: (strength + agility * 3), bns: 0, bnsItem: 0, id: 'cutting', label: "Режуще", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
            },
            agility: {
                evasion: new Stat({
                    base: (1), bns: 0, bnsItem: 0, id: 'evasion', label: "Уклонение", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                acrobat: new Stat({
                    base: (1), bns: 0, bnsItem: 0, id: 'acrobat', label: "Акробатика", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                stealth: new Stat({
                    base: (1), bns: 0, bnsItem: 0, id: 'stealth', label: "Скрытность", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                theft: new Stat({
                    base: (1), bns: 0, bnsItem: 0, id: 'theft', label: "Воровство", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                bow: new Stat({
                    base: (1), bns: 0, bnsItem: 0, id: 'bow', label: "Стрелковое оружие", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                throwing: new Stat({
                    base: (1), bns: 0, bnsItem: 0, id: 'throwing', label: "Метательное оружие", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                breaking: new Stat({
                    base: (1), bns: 0, bnsItem: 0, id: 'breaking', label: "Взлом", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
            },
            intell: {
                lie: new Stat({
                    base: (intell + luck * 2), bns: lie, bnsItem: 0, id: 'lie', label: "Лoжь", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                convince: new Stat({
                    base: (intell * 2 + luck), bns: convince, bnsItem: 0, id: 'convince', label: "Убеждение", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                concentration: new Stat({
                    base: 0, bns: concentration, bnsItem: 0, id: 'concentration', label: "Концентрация", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                knowledge_magic: new Stat({
                    base: 0, bns: knowledge_magic, bnsItem: 0, id: 'knowledge_magic', label: "Знания магии", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                alchemy: new Stat({
                    base: (intell * 3), bns: alchemy, bnsItem: 0, id: 'alchemy', label: "Алхимия", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                herbal: new Stat({
                    base: (intell * 2 + agility), bns: herbal, bnsItem: 0, id: 'herbal', label: "Травничество", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                meta: new Stat({
                    base: (intell * 4), bns: meta, bnsItem: 0, id: 'meta', label: "Метознания", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                first_aid: new Stat({
                    base: (intell * 3), bns: first_aid, bnsItem: 0, id: 'first_aid', label: "Первая помощь", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                doctor: new Stat({
                    base: (intell * 2), bns: doctor, bnsItem: 0, id: 'doctor', label: "Доктор", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                sleeper: new Stat({
                    base: (intell * 2 + agility), bns: sleeper, bnsItem: 0, id: 'sleeper', label: "Скиталец", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                faith: new Stat({
                    base: (intell * 1 + luck * 3), bns: faith, bnsItem: 0, id: 'faith', label: "Вера", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
                reading: new Stat({
                    base: (intell * 5), bns: reading, bnsItem: 0, id: 'reading', label: "Чтения", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
                }),
            },
        };
        this.charters = {
            strength: new Stat({
                base: (0 + strength), bns: 0, bnsItem: 0, id: 'strength', label: "Сила", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
            }),
            agility: new Stat({
                base: (0 + agility), bns: 0, bnsItem: 0, id: 'agility', label: "Ловкость", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
            }),
            intell: new Stat({
                base: (0 + intell), bns: 0, bnsItem: 0, id: 'intell', label: "Интеллект", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
            }),
            constitut: new Stat({
                base: (0 + constitut), bns: 0, bnsItem: 0, id: 'constitut', label: "Конституция", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
            }),
            luck: new Stat({
                base: (0 + luck), bns: 0, bnsItem: 0, id: 'luck', label: "Удача", descript: "Нанесение атак в ближнем бою при помощи кулаков в радиусе 1К",
            }),
        }
    }
}