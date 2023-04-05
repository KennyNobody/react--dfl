import styles from "./Agreement.module.scss";
import classNames from "classnames";
import IconCheck from "6_shared/assets/icons/icon-check.svg";
import {useFormContext} from "react-hook-form";

interface AgreementProps {
    link: string;
    name: string;
    isRequired: boolean;
}

export const Agreement = ({link, name, isRequired}: AgreementProps) => {
    const { register, formState: {errors} } = useFormContext();

    let val = false;

    try {
        if (name.split('.').reduce((acc, key) => acc[key], errors)) val = true;
    } catch {
        val = false;
    }

    return (
        <label className={classNames(styles['label'])}>
            <input
                type="checkbox"
                {...register(name, { required: isRequired })}
                className={classNames(styles['input'])}
            />
            <div className={classNames(styles['box'], {[styles['box--error']]: val })}>
                <IconCheck />
            </div>
            <span className={classNames(styles['text'])}>
                Я согласен на обработку <a href={link}>персональных данных</a>
            </span>
        </label>
    );
};
