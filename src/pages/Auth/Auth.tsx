import Panel from "../../components/Panel.tsx";
import Button from "../../components/Button.tsx";
import { FaDiceD20 } from "react-icons/fa";
import { useLoginMutation } from "../../store/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../../components/InputText.tsx";


interface RequestLogin {
    data: { token: string };
    error?: { data: { message: string } };
}


function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");

    const [Login, login_result] = useLoginMutation()
    const navigate = useNavigate()

    // ------------------------------------------------------
    const onSub = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await Login({ email, password }) as RequestLogin

        if (res.error) {
            const err = res.error.data.message || Object(res.error.data)
            return setErr(err)
        }

        setErr("")
        localStorage.setItem("token", res.data.token)
        return navigate('/Main')
    };



    // ------------------------------------------------------
    return <div className=" h-[100vh] flex justify-center items-center p-3 ">

        <Panel className="h-fit max-w-[60%] min-w-[500px] rounded-3xl">

            <div className="w-full p-3">
                < FaDiceD20 size={50} />
            </div>

            <div className=" h-full w-full flex rounded-3xl">

                <div className="w-[40%] px-3 h-full">
                    <h1 className="text-3xl w-full  font-bold">Sign in</h1>
                </div>


                <form onSubmit={onSub} className="w-[60%] flex flex-col p-2 items-center ">

                    <InputText label="Email" textInput={email} onInput={setEmail} ></InputText>

                    <InputText isPassword label="Password" textInput={password} onInput={setPassword} ></InputText>

                    <div className="w-full leading-3">
                        <span className="p-0 text-xs text-red-600">{err}</span>
                    </div>

                    <div className="flex justify-end items-end my-2 w-full">
                        <Button loading={login_result.isLoading} className="rounded-md text-xs mx-2" secondary> Sign in </Button>
                        <Button loading={login_result.isLoading} className="rounded-md text-xs " secondary> Create </Button>
                    </div>

                </form>
            </div>

        </Panel>
    </div>

}
export default Auth



