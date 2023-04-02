import styles from "./Textarea.module.scss";
import classNames from "classnames";
import {useFormContext} from "react-hook-form";

interface TextareaProps {
    nameProps: string;
    isRequired: boolean;
    placeholderProp: string;
}

export const Textarea = ({ placeholderProp, nameProps, isRequired }: TextareaProps) => {
    const { register, formState: {errors} } = useFormContext();

    let val = false;

    try {
        if (nameProps.split('.').reduce((acc, key) => acc[key], errors)) val = true;
    } catch {
        val = false;
    }

    return (
        <label className={classNames(styles['label'])}>
            <textarea
                className={classNames(styles['textarea'], {[styles['textarea--error']]: val })}
                placeholder={placeholderProp}
                {...register(nameProps, { required: isRequired })}
            />
        </label>
    );
};
