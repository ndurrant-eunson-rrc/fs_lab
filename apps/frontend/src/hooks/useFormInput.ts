import { useState } from "react";

export function useFormInput(initialValue: string = ""): {
    value: string;
    message: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    validate: (callback: (value: string) => string) => boolean;
    setMessage: (message: string) => void;
    reset: () => void;
} {
    const [value, setValue] = useState<string>(initialValue);
    const [message, setMessage] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setValue(e.target.value);
    };

    const validate = (callback: (value: string) => string): boolean => {
        const error = callback(value);
        setMessage(error);
        return error === "";
    };

    const reset = () => {
        setValue(initialValue);
        setMessage("");
    };

    return { value, message, onChange, validate, setMessage, reset };
}