const skillDescriptions = {
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


export class PersonChartersProps {
    strength = 5;
    agility = 5;
    intell = 5;
    constitut = 5;
    luck = 5;
}
export class PersonSkillsProps {
    lie = 0;
    convince = 0;
    concentration = 0;
    knowledge_magic = 0;
    alchemy = 0;
    herbal = 0;
    meta = 0;
    first_aid = 0;
    doctor = 0;
    sleeper = 0;
    faith = 0;
    reading = 0;
    hth_combat = 0;
    shield = 0;
    block = 0;
    stitching = 0;
    rubing = 0;
    crushing = 0;
    cutting = 0;
    evasion = 0;
    acrobat = 0;
    stealth = 0;
    theft = 0;
    bow = 0;
    throwing = 0;
    breaking = 0;
}
export class PersonAnyProps {
    name = "name";
    history = "history";
};

type PersonProps = PersonChartersProps & PersonSkillsProps & PersonAnyProps



export interface Stat {
    base: number;
    bns: number;
    bnsItem: number;
    id: string;
    label: string;
    description: string;
};




export class Skills {
    strength: {
        hth_combat: Stat,
        shield: Stat,
        block: Stat,
        stitching: Stat,
        rubing: Stat,
        crushing: Stat,
        cutting: Stat,
    };
    agility: {
        evasion: Stat,
        acrobat: Stat,
        stealth: Stat,
        theft: Stat,
        bow: Stat,
        throwing: Stat,
        breaking: Stat,
    };
    intell: {
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
    };
    constructor({ strength, agility, intell, constitut, luck, lie, convince, concentration, knowledge_magic, alchemy, herbal, meta, first_aid, doctor, sleeper, faith, reading }: PersonProps) {
        this.strength = {
            hth_combat: {
                base: (strength * 2 + agility * 2),
                bns: 0,
                bnsItem: 0,
                id: 'hth_combat',
                label: "Рукопашный бой",
                description: skillDescriptions.hth_combat,
            },
            shield: {
                base: (strength * 3 + agility),
                bns: 0,
                bnsItem: 0,
                id: 'shield',
                label: "Владение щитом",
                description: skillDescriptions.shield,
            },
            block: {
                base: (strength * 2 + agility * 2),
                bns: 0,
                bnsItem: 0,
                id: 'block',
                label: "Блок",
                description: skillDescriptions.block,
            },
            stitching: {
                base: (strength + agility + constitut),
                bns: 0,
                bnsItem: 0,
                id: 'stitching',
                label: "Колющие",
                description: skillDescriptions.stitching,
            },
            rubing: {
                base: (strength * 2 + agility * 2),
                bns: 0,
                bnsItem: 0,
                id: 'rubing',
                label: "Рубищие",
                description: skillDescriptions.rubing,
            },
            crushing: {
                base: (strength * 2 + constitut * 2),
                bns: 0,
                bnsItem: 0,
                id: 'crushing',
                label: "Дробящее",
                description: skillDescriptions.crushing,
            },
            cutting: {
                base: (strength + agility * 3),
                bns: 0,
                bnsItem: 0,
                id: 'cutting',
                label: "Режуще",
                description: skillDescriptions.cutting,
            },
        };
        this.agility = {
            evasion: {
                base: (1),
                bns: 0,
                bnsItem: 0,
                id: 'evasion',
                label: "Уклонение",
                description: skillDescriptions.evasion,
            },
            acrobat: {
                base: (1),
                bns: 0,
                bnsItem: 0,
                id: 'acrobat',
                label: "Акробатика",
                description: skillDescriptions.acrobat,
            },
            stealth: {
                base: (1),
                bns: 0,
                bnsItem: 0,
                id: 'stealth',
                label: "Скрытность",
                description: skillDescriptions.stealth,
            },
            theft: {
                base: (1),
                bns: 0,
                bnsItem: 0,
                id: 'theft',
                label: "Воровство",
                description: skillDescriptions.theft,
            },
            bow: {
                base: (1),
                bns: 0,
                bnsItem: 0,
                id: 'bow',
                label: "Стрелковое оружие",
                description: skillDescriptions.bow,
            },
            throwing: {
                base: (1),
                bns: 0,
                bnsItem: 0,
                id: 'throwing',
                label: "Метательное оружие",
                description: skillDescriptions.throwing,
            },
            breaking: {
                base: (1),
                bns: 0,
                bnsItem: 0,
                id: 'breaking',
                label: "Взлом",
                description: skillDescriptions.breaking,
            },
        };
        this.intell = {
            lie: {
                base: (intell + luck * 2),
                bns: lie,
                bnsItem: 0,
                id: 'lie',
                label: "Лoжь",
                description: skillDescriptions.lie,
            },
            convince: {
                base: (intell * 2 + luck),
                bns: convince,
                bnsItem: 0,
                id: 'convince',
                label: "Убеждение",
                description: skillDescriptions.convince,
            },
            concentration: {
                base: 0,
                bns: concentration,
                bnsItem: 0,
                id: 'concentration',
                label: "Концентрация",
                description: skillDescriptions.concentration,
            },
            knowledge_magic: {
                base: 0,
                bns: knowledge_magic,
                bnsItem: 0,
                id: 'knowledge_magic',
                label: "Знания магии",
                description: skillDescriptions.knowledge_magic,
            },
            alchemy: {
                base: (intell * 3),
                bns: alchemy,
                bnsItem: 0,
                id: 'alchemy',
                label: "Алхимия",
                description: skillDescriptions.alchemy,
            },
            herbal: {
                base: (intell * 2 + agility),
                bns: herbal,
                bnsItem: 0,
                id: 'herbal',
                label: "Травничество",
                description: skillDescriptions.herbal,
            },
            meta: {
                base: (intell * 4),
                bns: meta,
                bnsItem: 0,
                id: 'meta',
                label: "Метознания",
                description: skillDescriptions.meta,
            },
            first_aid: {
                base: (intell * 3),
                bns: first_aid,
                bnsItem: 0,
                id: 'first_aid',
                label: "Первая помощь",
                description: skillDescriptions.first_aid,
            },
            doctor: {
                base: (intell * 2),
                bns: doctor,
                bnsItem: 0,
                id: 'doctor',
                label: "Доктор",
                description: skillDescriptions.doctor,
            },
            sleeper: {
                base: (intell * 2 + agility),
                bns: sleeper,
                bnsItem: 0,
                id: 'sleeper',
                label: "Скиталец",
                description: skillDescriptions.sleeper,
            },
            faith: {
                base: (intell * 1 + luck * 3),
                bns: faith,
                bnsItem: 0,
                id: 'faith',
                label: "Вера",
                description: skillDescriptions.faith,
            },
            reading: {
                base: (intell * 5),
                bns: reading,
                bnsItem: 0,
                id: 'reading',
                label: "Чтения",
                description: skillDescriptions.reading,
            },
        };
    };
}



export interface Charters {
    strength: Stat;
    agility: Stat;
    intell: Stat;
    constitut: Stat;
    luck: Stat;
}





export class Person {
    userId: number;
    lvl: number;
    hp: number;
    max_hp: number;
    mp: number;
    max_mp: number;
    sp: number;
    max_sp: number;
    name: string;
    history: string;
    img: string | null;
    skills: Skills;
    charters: Charters;

    constructor(
        { name, history, strength, agility, intell, constitut, luck, lie, convince, concentration, knowledge_magic, alchemy, herbal, meta, first_aid, doctor, sleeper, faith, reading, hth_combat, shield, block, stitching, rubing, crushing, cutting, evasion, acrobat, stealth, theft, bow, throwing, breaking }: PersonProps
    ) {
        this.name = name;
        this.userId = 0;
        this.lvl = 1;
        this.hp = 10 + constitut * 2;
        this.max_hp = 10 + constitut * 2;
        this.mp = intell * 5;
        this.max_mp = intell * 5;
        this.sp = agility;
        this.max_sp = agility;
        this.history = history;
        this.img = null;
        this.skills = new Skills({ name, history, strength, agility, intell, constitut, luck, lie, convince, concentration, knowledge_magic, alchemy, herbal, meta, first_aid, doctor, sleeper, faith, reading, hth_combat, shield, block, stitching, rubing, crushing, cutting, evasion, acrobat, stealth, theft, bow, throwing, breaking });
        this.charters = {
            strength: {
                base: (0 + strength),
                bns: 0,
                bnsItem: 0,
                id: 'strength',
                label: "Сила",
                description: "",
            },
            agility: {
                base: (0 + agility),
                bns: 0,
                bnsItem: 0,
                id: 'agility',
                label: "Ловкость",
                description: "",
            },
            intell: {
                base: (0 + intell),
                bns: 0,
                bnsItem: 0,
                id: 'intell',
                label: "Интеллект",
                description: "",
            },
            constitut: {
                base: (0 + constitut),
                bns: 0,
                bnsItem: 0,
                id: 'constitut',
                label: "Конституция",
                description: "",
            },
            luck: {
                base: (0 + luck),
                bns: 0,
                bnsItem: 0,
                id: 'luck',
                label: "Удача",
                description: "",
            },
        }
    }
}