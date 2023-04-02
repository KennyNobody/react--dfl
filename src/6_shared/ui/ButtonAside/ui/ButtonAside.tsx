import React, {Component, ReactNode} from "react";
import classNames from "classnames";
import styles from "./ButtonAside.module.scss";
import Icon1 from "6_shared/assets/icons/icon-aside-1.svg"
import Icon2 from "6_shared/assets/icons/icon-aside-2.svg"
import Icon3 from "6_shared/assets/icons/icon-aside-3.svg"
import Icon4 from "6_shared/assets/icons/icon-aside-4.svg"
import Icon5 from "6_shared/assets/icons/icon-aside-5.svg"
import Icon6 from "6_shared/assets/icons/icon-aside-6.svg"
import Icon7 from "6_shared/assets/icons/icon-aside-7.svg"
import Icon8 from "6_shared/assets/icons/icon-aside-8.svg"

interface ButtonAsideProps {
    className?: string;
    caption: string;
    index: number;
    isActive: boolean;
    setTab: Function;
}

interface Icons {
    [key: string]: React.FC<any>;
}

const icons: Icons = {
    'icon0': Icon1,
    'icon1': Icon2,
    'icon2': Icon3,
    'icon3': Icon4,
    'icon4': Icon5,
    'icon5': Icon6,
    'icon6': Icon7,
    'icon7': Icon8,
};

export const ButtonAside = ({className, caption, index, isActive, setTab}: ButtonAsideProps) => {
    const Icon = icons['icon' + index];

    return (
        <button className={classNames(styles.link, {[styles['link--active']]: isActive })} onClick={() => setTab(index)}>
            <Icon />
            <span className={classNames(styles.link__text)}>
                { caption }
            </span>
        </button>
    );
};
