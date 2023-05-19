import React from "react";
import classNames from 'classnames';
import cls from './TitleSection.module.scss';
import IconAccent from "6_shared/assets/icons/icon-accent.svg";

interface TitleSectionProps {
    className?: string;
    text: string;
}

export const TitleSection = ({className, text}: TitleSectionProps) => {
    return (
        <div className={classNames(className)}>
            <h3 className={classNames(cls.title)}>
                { text }
            </h3>
            {/*<IconAccent  className={classNames(styles['iconAccent'])} />*/}
        </div>
    );
};
