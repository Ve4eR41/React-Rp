import { useLoaderData } from "react-router-dom";
import Panel from "../../components/Panel";
import PersonPanelMini from "../../components/Person/PersonPanelMini.tsx";
import ButtonCreateNewPerson from "../../components/Person/ButtonCreateNewPerson.tsx";

interface Person {
    id: number;
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
    img: null;
}

function Main() {
    const { details } = useLoaderData() ;


    // ------------------------------------------------------
    const renderPersons = details.map((person: Person) => {
        return <PersonPanelMini className="min-w-[300px] w-1/3 max-w-[500px] m-2 " person={person} key={person.id} />
    });


    return <Panel className="  min-h-[100vh]" >
        <div className="flex flex-wrap columns-1 justify-center">
            <ButtonCreateNewPerson className='min-w-[300px] w-1/3 max-w-[500px] m-2' />
            {renderPersons}
            <div className="min-w-[300px] w-1/3 max-w-[500px] m-2 opacity-0"></div>
        </div>
    </ Panel>

}
export default Main


