import React from "react";
import classNames from "classnames";
import styles from "./ButtonRevert.module.scss";
import Icon from "6_shared/assets/icons/icon-revert.svg";

type ButtonRevertType = 'bottom';

interface ButtonRevertProps {
    onClickEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: ButtonRevertType;
}

export const ButtonRevert = ({onClickEvent, type}: ButtonRevertProps) => {
    return (
        <button
            className={classNames(styles['button'], {[styles['button--bottom']]: type === 'bottom'})}
            type="button"
            onClick={onClickEvent}
        >
            <Icon />
        </button>
    );
};
