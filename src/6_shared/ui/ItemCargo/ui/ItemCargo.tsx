import style from "./ItemCargo.module.scss";
import classNames from "classnames";
import Icon from '6_shared/assets/icons/icon-add.svg';
import React, {ReactNode} from "react";

interface ItemCargoProps {
    children: ReactNode;
    buttonEvent: React.MouseEventHandler<HTMLButtonElement>;
}

export const ItemCargo = ({children, buttonEvent}: ItemCargoProps) => {
    return (
        <div className={classNames(style['wrapper'])}>
            <div className={classNames(style['header'])}>
                <p className={classNames(style['title'])}>
                    Груз №1
                </p>
                <button className={classNames(style['button'])} onClick={buttonEvent}>
                    <span className={classNames(style['caption'])}>
                        Добавить груз
                    </span>
                    <Icon className={classNames(style['icon'])} />
                </button>
            </div>
            <div className={classNames(style['main'])}>
                { children }
            </div>
        </div>
    );
};
