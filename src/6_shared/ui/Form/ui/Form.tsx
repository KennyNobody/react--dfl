import styles from "./Form.module.scss";
import {FormEvent, ReactNode} from "react";
import classNames from "classnames";
import {useFormContext} from "react-hook-form";

interface FormProps {
    submitEvent?: any;
    children: ReactNode
}

export const Form = ({submitEvent, children}: FormProps) => {
    const { register, getFieldState } = useFormContext();

    const submitData = (e: FormEvent) => {
        // e.preventDefault();
        alert('Пык');
        // submitEvent();
    }

    return (
        <form className={classNames(styles['form'])} onSubmit={(e:FormEvent) => submitData(e)}>
            { children }
        </form>
    );
};
