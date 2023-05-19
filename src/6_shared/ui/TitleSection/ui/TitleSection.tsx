import React from "react";
import classNames from 'classnames';
import cls from './TitleSection.module.scss';
import IconAccent from "6_shared/assets/icons/icon-accent.svg";
import {Informer} from "6_shared/ui/Informer";

interface TitleSectionProps {
    className?: string;
    text: string;
    informerId?: number;
}

export const TitleSection = ({className, text, informerId}: TitleSectionProps) => {
    return (
        <div className={classNames(className)}>
            <h3 className={classNames(cls.title)}>
                <span>{ text }</span>
                {informerId && <Informer informerId={informerId}/>}
            </h3>
        </div>
    );
};
