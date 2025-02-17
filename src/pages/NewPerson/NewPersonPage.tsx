import { FaUser } from "react-icons/fa"
import Panel from "../../components/Panel"
import StatsList from "../../components/Person/Stats/StatsList.tsx"
import PointPanel from "../../components/PointPanel"
import { useMemo, useState } from "react"
import InputText from "../../components/InputText"
import { Person, PersonAnyProps, PersonChartersProps, PersonSkillsProps } from "../../classes/Person.ts"



function NewPerson() {
    const [personAnyProps, setPersonAnyProps] = useState<PersonAnyProps>(new PersonAnyProps());
    const [personChartersProps, setPersonChartersProps] = useState<PersonChartersProps>(new PersonChartersProps());
    const [personSkillsProps, setPersonSkillsProps] = useState<PersonSkillsProps>(new PersonSkillsProps());
    const limitPointsCharters = 30;
    const limitPointsSkills = 15;
    // ------------------------------------------------------
    // убрал зависимость от personSkillsProps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const person = useMemo(() => new Person(personAnyProps, personChartersProps, personSkillsProps), [personAnyProps, personChartersProps]);
    const curPointsCharters = useMemo(() => Object.values(personChartersProps).reduce((acc, cur) => acc + cur, 0), [personChartersProps]);
    const curPointsSkills = useMemo(() => Object.values(personSkillsProps).reduce((acc, cur) => acc + cur, 0), [personSkillsProps]);



    // ------------------------------------------------------
    return <Panel className='min-h-[100vh]'>

        <Panel className='flex'>
            <div className="h-16 w-16 p-2 mr-3 rounded-full bg-slate-700">
                <FaUser className="w-full" color="white" />
            </div>
            <div>
                <div className="opacity-70 text-sm">lvl {person.lvl}</div>
                <InputText className='mt-2' label='Имя' onInput={(newValue: string) => setPersonAnyProps({ ...PersonSkillsProps, name: newValue })} textInput={person.name} />
                <PointPanel person={person} />
            </div>
        </Panel>

        

        <Panel className="mt-5">
            <h1 className="text-xl font-bold mr-2 ">Описание</h1>
            <textarea className="w-full" placeholder="Предистория, описание характера и внешности... " name="" id="" ></textarea>
        </Panel>



        <StatsList headers="Характеристики"
            curPoints={curPointsCharters}
            limitPoints={limitPointsCharters}
            isNoViewBaseLvl
            isBorder
            isHorizon
            className='my-5'
            isMaxDisable={curPointsCharters >= limitPointsCharters}
            onStatChanged={setPersonChartersProps}
            personProps={personChartersProps}
            stats={person.charters}
        />



        <div className='grid grid-cols-[1fr_1fr_1fr] gap-3'>
            <StatsList headers="Сила"
                limitPoints={limitPointsSkills}
                curPoints={curPointsSkills}
                isEven
                onStatChanged={setPersonSkillsProps}
                isMaxDisable={curPointsSkills >= limitPointsSkills}
                personProps={personSkillsProps}
                stats={person.skills.strength} />

            <StatsList headers="Ловкость"
                limitPoints={limitPointsSkills}
                curPoints={curPointsSkills}
                isEven
                onStatChanged={setPersonSkillsProps}
                isMaxDisable={curPointsSkills >= limitPointsSkills}
                personProps={personSkillsProps}
                stats={person.skills.agility} />

            <StatsList headers="Интеллект"
                limitPoints={limitPointsSkills}
                curPoints={curPointsSkills}
                isEven
                onStatChanged={setPersonSkillsProps}
                isMaxDisable={curPointsSkills >= limitPointsSkills}
                personProps={personSkillsProps}
                stats={person.skills.intell} />
        </div>

    </Panel>
}
export default NewPerson 