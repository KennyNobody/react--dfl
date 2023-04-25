import style from "./ItemCargo.module.scss";
import classNames from "classnames";
import React, {ReactNode} from "react";

interface ItemCargoProps {
    children: ReactNode;
    context: any;
    index: number;
    isActive: boolean;
}

export const ItemCargo = ({children, index, isActive}: ItemCargoProps) => {
    return (
        <div className={classNames(style['wrapper'])}>
            {!isActive && <div className={classNames(style['header'])}>
                <p className={classNames(style['title'])}>
                    Груз №{index}
                </p>
            </div>}
            <div className={classNames(style['main'])}>
                { children }
            </div>
        </div>
    );
};
