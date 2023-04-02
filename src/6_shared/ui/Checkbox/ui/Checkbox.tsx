import styles from "./Checkbox.module.scss";
import classNames from "classnames";
import IconCheck from "6_shared/assets/icons/icon-check.svg";
import {useFormContext} from "react-hook-form";

interface CheckboxProps {
    caption: string;
    name: string;
    isRequired?: boolean;
}

export const Checkbox = ({name, caption, isRequired = false}: CheckboxProps) => {
    const { register, formState: {errors} } = useFormContext();

    return (
        <label className={classNames(styles['label'], {[styles['label--error']]: errors[name]})}>
            <input
                {...register(name, { required: isRequired })}
                className={classNames(styles['input'])}
                type="checkbox"
                name={name}
            />
            <div className={classNames(styles['box'])}>
                <IconCheck />
            </div>
            <span className={classNames(styles['text'])}>
                { caption }
            </span>
        </label>
    );
};
