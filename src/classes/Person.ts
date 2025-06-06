export enum StatId {
    hth_combat = "hth_combat",
        shield = "shield",
        block = "block",
        stitching = "stitching",
        rubing = "rubing",
        crushing = "crushing",
        cutting = "cutting",
        evasion = "evasion",
        acrobat = "acrobat",
        stealth = "stealth",
        theft = "theft",
        bow = "bow",
        throwing = "throwing",
        breaking = "breaking",
        lie = "lie",
        convince = "convince",
        concentration = "concentration",
        knowledge_magic = "knowledge_magic",
        alchemy = "alchemy",
        herbal = "herbal",
        meta = "meta",
        first_aid = "first_aid",
        doctor = "doctor",
        sleeper = "sleeper",
        faith = "faith",
        reading = "reading",
};

export interface Stat {
    base: number,
    bns: number,
    bnsItem: number,
    id: string,
    label: string,
    descript: string,
}


const stat

const Ru_UI: Record<> = {
    hth_combat: "Нанесение атак в ближнем бою кулаками.",
    shield: "Использование щита в ближнем бою.",
    block: "Блокирование атак.",
    stitching: "Нанесение колющих ударов.",
    rubing: "Нанесение рубящих ударов.",
    crushing: "Нанесение дробящих ударов.",
    cutting: "Нанесение режущих ударов.",
    evasion: "Уклонение от атак.",
    acrobat: "Использование акробатических трюков.",
    stealth: "Скрытное передвижение.",
    theft: "Кража предметов.",
    bow: "Стрельба из лука.",
    throwing: "Метание предметов.",
    breaking: "Взлом замков.",
    lie: "Обман и ложь.",
    convince: "Убеждение других.",
    concentration: "Фокусировка и концентрация.",
    knowledge_magic: "Знания о магии.",
    alchemy: "Приготовление алхимических зелий.",
    herbal: "Использование трав.",
    meta: "Знания метафизики.",
    first_aid: "Оказание первой медицинской помощи.",
    doctor: "Лечение заболеваний.",
    sleeper: "Навыки выживания в диких условиях.",
    faith: "Сила веры.",
    reading: "Чтение и письмо."
};



export type PersonSkillsProps = Record<keyof SkillsStrength | keyof SkillsAgility | keyof SkillsIntellect, number>;

interface SkillsStrength {
    hth_combat: Stat,
    shield: Stat,
    block: Stat,
    stitching: Stat,
    rubing: Stat,
    crushing: Stat,
    cutting: Stat,
}
interface SkillsAgility {
    evasion: Stat,
    acrobat: Stat,
    stealth: Stat,
    theft: Stat,
    bow: Stat,
    throwing: Stat,
    breaking: Stat,
}
interface SkillsIntellect {
    lie: Stat,
    convince: Stat,
    concentration: Stat,
    knowledge_magic: Stat,
    alchemy: Stat,
    herbal: Stat,
    meta: Stat,
    first_aid: Stat,
    doctor: Stat,
    sleeper: Stat,
    faith: Stat,
    reading: Stat,
}



// export class Skills {
//     constructor({ strength, agility, intell, constitut, luck, }: PersonChartersProps, { lie, convince, concentration, knowledge_magic, alchemy, herbal, meta, first_aid, doctor, sleeper, faith, reading }: PersonSkillsProps) {
//         this.strength = {
//             hth_combat: new Stat({
//                 base: (strength * 2 + agility * 2), bns: 0, bnsItem: 0, id: 'hth_combat', label: "Рукопашный бой", description: skillDescriptions.hth_combat,
//             }),
//             shield: new Stat({
//                 base: (strength * 3 + agility), bns: 0, bnsItem: 0, id: 'shield', label: "Владение щитом", description: skillDescriptions.shield,
//             }),
//             block: new Stat({
//                 base: (strength * 2 + agility * 2), bns: 0, bnsItem: 0, id: 'block', label: "Блок", description: skillDescriptions.block,
//             }),
//             stitching: new Stat({
//                 base: (strength + agility + constitut), bns: 0, bnsItem: 0, id: 'stitching', label: "Колющие", description: skillDescriptions.stitching,
//             }),
//             rubing: new Stat({
//                 base: (strength * 2 + agility * 2), bns: 0, bnsItem: 0, id: 'rubing', label: "Рубищие", description: skillDescriptions.rubing,
//             }),
//             crushing: new Stat({
//                 base: (strength * 2 + constitut * 2), bns: 0, bnsItem: 0, id: 'crushing', label: "Дробящее", description: skillDescriptions.crushing,
//             }),
//             cutting: new Stat({
//                 base: (strength + agility * 3), bns: 0, bnsItem: 0, id: 'cutting', label: "Режуще", description: skillDescriptions.cutting,
//             }),
//         };
//         this.agility = {
//             evasion: new Stat({
//                 base: (agility * 2), bns: 0, bnsItem: 0, id: 'evasion', label: "Уклонение", description: skillDescriptions.evasion,
//             }),
//             acrobat: new Stat({
//                 base: (agility * 3), bns: 0, bnsItem: 0, id: 'acrobat', label: "Акробатика", description: skillDescriptions.acrobat,
//             }),
//             stealth: new Stat({
//                 base: (agility * 3), bns: 0, bnsItem: 0, id: 'stealth', label: "Скрытность", description: skillDescriptions.stealth,
//             }),
//             theft: new Stat({
//                 base: (agility * 3), bns: 0, bnsItem: 0, id: 'theft', label: "Воровство", description: skillDescriptions.theft,
//             }),
//             bow: new Stat({
//                 base: (agility * 2), bns: 0, bnsItem: 0, id: 'bow', label: "Стрелковое оружие", description: skillDescriptions.bow,
//             }),
//             throwing: new Stat({
//                 base: (agility * 2 + strength), bns: 0, bnsItem: 0, id: 'throwing', label: "Метательное оружие", description: skillDescriptions.throwing,
//             }),
//             breaking: new Stat({
//                 base: (agility * 3), bns: 0, bnsItem: 0, id: 'breaking', label: "Взлом", description: skillDescriptions.breaking,
//             }),
//         };
//         this.intell = {
//             lie: new Stat({
//                 base: (intell + luck * 2), bns: lie, bnsItem: 0, id: 'lie', label: "Лoжь", description: skillDescriptions.lie,
//             }),
//             convince: new Stat({
//                 base: (intell * 2 + luck), bns: convince, bnsItem: 0, id: 'convince', label: "Убеждение", description: skillDescriptions.convince,
//             }),
//             concentration: new Stat({
//                 base: 0, bns: concentration, bnsItem: 0, id: 'concentration', label: "Концентрация", description: skillDescriptions.concentration,
//             }),
//             knowledge_magic: new Stat({
//                 base: 0, bns: knowledge_magic, bnsItem: 0, id: 'knowledge_magic', label: "Знания магии", description: skillDescriptions.knowledge_magic,
//             }),
//             alchemy: new Stat({
//                 base: (intell * 3), bns: alchemy, bnsItem: 0, id: 'alchemy', label: "Алхимия", description: skillDescriptions.alchemy,
//             }),
//             herbal: new Stat({
//                 base: (intell * 2 + agility), bns: herbal, bnsItem: 0, id: 'herbal', label: "Травничество", description: skillDescriptions.herbal,
//             }),
//             meta: new Stat({
//                 base: (intell * 4), bns: meta, bnsItem: 0, id: 'meta', label: "Метознания", description: skillDescriptions.meta,
//             }),
//             first_aid: new Stat({
//                 base: (intell * 3), bns: first_aid, bnsItem: 0, id: 'first_aid', label: "Первая помощь", description: skillDescriptions.first_aid,
//             }),
//             doctor: new Stat({
//                 base: (intell * 2), bns: doctor, bnsItem: 0, id: 'doctor', label: "Доктор", description: skillDescriptions.doctor,
//             }),
//             sleeper: new Stat({
//                 base: (intell * 2 + agility), bns: sleeper, bnsItem: 0, id: 'sleeper', label: "Скиталец", description: skillDescriptions.sleeper,
//             }),
//             faith: new Stat({
//                 base: (intell * 1 + luck * 3), bns: faith, bnsItem: 0, id: 'faith', label: "Вера", description: skillDescriptions.faith,
//             }),
//             reading: new Stat({
//                 base: (intell * 5), bns: reading, bnsItem: 0, id: 'reading', label: "Чтения", description: skillDescriptions.reading,
//             }),
//         };
//     };
// };


export interface Charters {
    strength: Stat;
    agility: Stat;
    intellect: Stat;
    constitut: Stat;
    luck: Stat;
};

export class PersonChartersProps {
    strength: number;
    agility: number;
    intell: number;
    constitut: number;
    luck: number;
    constructor() {
        this.strength = 5;
        this.agility = 5;
        this.intell = 5;
        this.constitut = 5;
        this.luck = 5;
    }
};



export class PersonAnyProps {
    name: string;
    constructor() {
        this.name = "name";
    }
};

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
    crit: number;
    de_crit: number;
    history: string;
    img: string | null;
    skills: {
        strength: SkillsStrength
        agility: SkillsAgility
        intellect: SkillsIntellect
    };
    charters: Charters;

    constructor(
        { name }: PersonAnyProps,
    ) {
        this.id = 0;
        this.userId = 0;

        this.hp = 10 + constitut * 3;
        this.max_hp = 10 + constitut * 3;

        this.mp = intell * 2;
        this.max_mp = intell;

        this.sp = agility;
        this.max_sp = agility;

        this.crit = luck;
        this.de_crit = 90 + luck;

        this.name = name;
        this.lvl = 1;
        this.history = "pupa is's son of dildo ";

        this.img = null;

    }
};