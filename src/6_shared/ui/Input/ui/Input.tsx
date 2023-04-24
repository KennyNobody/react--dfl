import styles from "./Input.module.scss";
import classNames from "classnames";
import {useFormContext} from "react-hook-form";
import {KeyboardEventHandler} from "react";

type TypeProp = 'text' | 'number' | 'email' | 'tel';

interface InputProps {
    caption?: string;
    placeholderProp: string;
    typeProp: TypeProp;
    defaultValue?: string | number;
    name: string;
    usePhoneMask?: boolean;
    isRequired: boolean;
}

export const Input = ({placeholderProp, typeProp, caption, defaultValue, name, isRequired, usePhoneMask }: InputProps) => {
    const { register, formState: {errors} } = useFormContext();
    const activeClass = caption ? styles['input--caption'] : '';

    let val = false;

    try {
        if (name.split('.').reduce((acc, key) => acc[key], errors)) val = true;
    } catch {
        val = false;
    }

    const eventHandler = (el: any) => {
        if (typeProp === 'tel') {
            el.value = el.value.replace(/[^0-9+]/g, "");
        } else if (typeProp === 'number') {
            el.value = el.value.replace(/[^0-9]/g, "");
        }
    }

    return (
        <label className={classNames(styles['label'])}>
            <input
                className={classNames(styles['input'], {[styles['input--error']]: val }, activeClass)}
                name={name}
                type={typeProp}
                placeholder={placeholderProp}
                defaultValue={defaultValue}
                {...(typeProp === 'number') ? {'min': 0} : {}}
                {...register(name, { required: isRequired })}
                onChange={(e) => eventHandler(e.target)}
            />
            {caption && <span className={classNames(styles['caption'])}>{caption}</span>}
        </label>
    );
};
