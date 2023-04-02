import React from "react";
import classNames from "classnames";
import styles from "./ButtonNext.module.scss";
import IconNext from "6_shared/assets/icons/icon-arrow-next.svg";

interface ButtonNext {
    text: string
    buttonEvent: any;
}

export const ButtonNext = ({buttonEvent, text}: ButtonNext) => {
    return (
        <button
            type={'button'}
            onClick={buttonEvent}
            className={classNames(styles['button'])}
        >
            <IconNext className={classNames(styles['button__icon'])}/>
            <span className={classNames(styles['button__text'])}>
                { text }
            </span>
        </button>
    );
};
