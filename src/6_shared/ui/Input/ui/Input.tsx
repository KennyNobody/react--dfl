import styles from "./Input.module.scss";
import classNames from "classnames";
import {useFormContext, UseFormRegister} from "react-hook-form";

type TypeProp = 'text' | 'number';

interface InputProps {
    caption?: string;
    placeholderProp: string;
    typeProp: TypeProp;
    defaultValue?: string | number;
    name: string;
    isRequired: boolean;
}

export const Input = ({placeholderProp, typeProp, caption, defaultValue, name, isRequired }: InputProps) => {
    const { register, formState: {errors} } = useFormContext();
    const activeClass = caption ? styles['input--caption'] : '';

    return (
        <label className={classNames(styles['label'])}>
            <input
                className={classNames(styles['input'], {[styles['input--error']]: errors[name] }, activeClass)}
                name={name}
                type={typeProp}
                placeholder={placeholderProp}
                defaultValue={defaultValue}
                {...register(name, { required: isRequired })}
            />
            {caption && <span className={classNames(styles['caption'])}>{caption}</span>}
        </label>
    );
};
