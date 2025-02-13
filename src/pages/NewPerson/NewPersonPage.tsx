import { FaUser } from "react-icons/fa"
import Panel from "../../components/Panel"
import StatsList from "../../components/Person/Stats/StatsList.tsx"
import PointPanel from "../../components/PointPanel"
import { useMemo, useState } from "react"
import InputText from "../../components/InputText"
import { Person, PersonProps } from "../../classes/Person.ts"



function NewPerson() {
    const [personProps, setPersonProps] = useState<PersonProps>(new PersonProps())

    // ------------------------------------------------------
    const person = useMemo(() => {
        const person = new Person(personProps);
        return person;
    }, [personProps]);



    // ------------------------------------------------------
    return <Panel className='min-h-[100vh]'>

        <Panel className='flex'>
            <div className="h-16 w-16 p-2 mr-3 rounded-full bg-slate-700">
                <FaUser className="w-full" color="white" />
            </div>
            <div>
                <div className="opacity-70 text-sm">lvl {person.lvl}</div>
                <InputText className='mt-2' label='Имя' onInput={(newValue: string) => setPersonProps({ ...personProps, name: newValue })} textInput={person.name} />
                <PointPanel stats={{ hp: 5, max_hp: 10, sp: 5, max_sp: 5, mp: 1, max_mp: 32 }} />
            </div>
        </Panel>


        <Panel className='my-5 '>
            <h1 className="text-xl font-bold m-3 mb-5 ">Характеристики</h1>
            <StatsList isNoViewBaseLvl isCleanStyle isBorder className='p-0 flex items-start justify-center' onStatChanged={setPersonProps} personProps={personProps} stats={person.charters} ></StatsList>
        </Panel>



        <div className='grid grid-cols-[auto_auto_auto] gap-3'>
            <StatsList isEven onStatChanged={setPersonProps} personProps={personProps} stats={person.skills.strength} />
            <StatsList isEven onStatChanged={setPersonProps} personProps={personProps} stats={person.skills.agility}  />
            <StatsList isEven onStatChanged={setPersonProps} personProps={personProps} stats={person.skills.intell} />
        </div>

    </Panel>
}
export default NewPerson 