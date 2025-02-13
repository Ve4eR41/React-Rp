import classNames from "classnames"
import React from "react";

interface InputTextProps {
    textInput?: string;
    onInput: (newValue: string) => void;
    label?: string;
    isPassword?: boolean;
    className?: string;
}


function InputText({ textInput, onInput, label, isPassword, className }: InputTextProps) {
    const classes = classNames(
        className,
        "relative w-[100%]"
    )

    return (
        <div className={classes}>
            <label className='absolute text-gray-400 bg-white text-xs left-3 top-[-0.5rem]'>{label}</label>
            <input
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => onInput(e.target.value)}
                value={textInput}
                className="border rounded-md p-1 mb-3 text-m border-gray-400 w-[100%]"
                type={isPassword ? "password" : "text"} />
        </div>
    )
}
export default InputText 