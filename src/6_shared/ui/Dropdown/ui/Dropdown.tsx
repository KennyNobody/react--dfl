import styles from "./Dropdown.module.scss";
import {ReactNode, useState} from "react";
import classNames from "classnames";
import IconArrow from "6_shared/assets/icons/icon-arrow-drop.svg"

interface DropdownProps {
    title: string;
    isOpened: boolean;
    children: ReactNode
}

export const Dropdown = ({title, children, isOpened}: DropdownProps) => {

    const [modeActive, setModeActive] = useState(isOpened);

    const toggleMode = () => setModeActive(!modeActive);

    return (
        <div className={classNames(styles['dropdown'], {[styles['dropdown--active']]: modeActive})}>
            <button className={classNames(styles['dropdown__header'])} onClick={toggleMode} type="button">
                <span className={classNames(styles['dropdown__title'])}>
                    { title }
                </span>
                <IconArrow className={classNames(styles['dropdown__icon'])} />
            </button>
            <div className={classNames(styles['dropdown__main'])}>
                <div className={classNames(styles['dropdown__content'])}></div>
                { children }
            </div>
        </div>
    );
};
