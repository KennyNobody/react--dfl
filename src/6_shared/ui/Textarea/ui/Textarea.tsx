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

    return (
        <label className={classNames(styles['label'])}>
            <textarea
                className={classNames(styles['textarea'], {[styles['textarea--error']]: errors[nameProps] })}
                placeholder={placeholderProp}
                {...register(nameProps, { required: isRequired })}
            />
        </label>
    );
};
