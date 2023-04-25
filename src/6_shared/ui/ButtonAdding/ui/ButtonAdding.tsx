import classNames from 'classnames';
import cls from './ButtonAdding.module.scss';
import Icon from '6_shared/assets/icons/icon-add.svg';
import React from "react";

interface ButtonAddingProps {
    context: any;
}

export const ButtonAdding = ({context}: ButtonAddingProps) => {
    return (
        <button
            type={"button"}
            onClick={context.addItem}
            className={classNames(cls['button'])}
        >
            <span className={classNames(cls['caption'])}>
                Добавить груз
            </span>
            <Icon className={classNames(cls['icon'])} />
        </button>
    );
};
