import style from "./ItemCargo.module.scss";
import classNames from "classnames";
import React, {ReactNode} from "react";
import Icon from '6_shared/assets/icons/icon-add.svg';
import {ButtonAdding} from "6_shared/ui/ButtonAdding";
import {useFormContext} from "react-hook-form";

interface ItemCargoProps {
    children: ReactNode;
    context: any;
    index: number;
}

export const ItemCargo = ({children, index, context}: ItemCargoProps) => {
    const {getValues} = useFormContext();

    return (
        <div className={classNames(style['wrapper'])}>
            {(context.formType == 'groupage' || getValues('transportVariation') === 2) && <div className={classNames(style['header'])}>
                <p className={classNames(style['title'])}>
                    Грузовое место №{index}
                </p>
                <ButtonAdding context={context}/>
            </div>}
            <div className={classNames(style['main'])}>
                { children }
            </div>
        </div>
    );
};
