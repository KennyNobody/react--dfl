import styles from "./Page.module.scss";
import {ReactNode} from "react";
import classNames from "classnames";

type PageType = 'regular' | 'stock' | 'customs';

interface PageProps {
    children: ReactNode;
    type: PageType;
}

export const Page = ({children, type}: PageProps) => {
    return (
        <div className={classNames(styles['page'], styles[`page--${type}`])}>
            { children }
        </div>
    );
};
