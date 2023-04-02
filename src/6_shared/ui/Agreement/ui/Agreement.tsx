import styles from "./Agreement.module.scss";
import classNames from "classnames";
import IconCheck from "6_shared/assets/icons/icon-check.svg";

interface AgreementProps {
    link: string;
}

export const Agreement = ({link}: AgreementProps) => {
    return (
        <label className={classNames(styles['label'])}>
            <input className={classNames(styles['input'])} type="checkbox"/>
            <div className={classNames(styles['box'])}>
                <IconCheck />
            </div>
            <span className={classNames(styles['text'])}>
                Я согласен на обработку <a href={link}>персональных данных</a>
            </span>
        </label>
    );
};
