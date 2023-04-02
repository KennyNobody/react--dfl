import style from "./ItemCargo.module.scss";
import classNames from "classnames";
import Icon from '6_shared/assets/icons/icon-add.svg';
import React, {ReactNode} from "react";

interface ItemCargoProps {
    children: ReactNode;
    context: any;
    index: number;
}

export const ItemCargo = ({children, context, index}: ItemCargoProps) => {
    return (
        <div className={classNames(style['wrapper'])}>
            <div className={classNames(style['header'])}>
                <p className={classNames(style['title'])}>
                    Груз №{index}
                </p>
                <button
                    type={"button"}
                    onClick={context.addItem}
                    className={classNames(style['button'])}
                >
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
