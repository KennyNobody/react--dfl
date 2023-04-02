import styles from "./Wrapper.module.scss";
import {ReactNode} from "react";
import classNames from "classnames";
import scrollbar from "6_shared/styles/scrollbar.module.scss";

type WrapperSize = 'regular' | 'stock' | 'customs';

interface WrapperProps {
    size: WrapperSize;
    children: ReactNode;
    isFull: boolean
}

export const Wrapper = ({children, size, isFull}: WrapperProps) => {
    return (
        <div className={classNames(styles['wrapper'], styles[`wrapper--${size}`], {[styles['wrapper--full']]: isFull })}>
            <div className={classNames(styles['wrapper__content'], scrollbar['scrollbar'])}>
                { children }
            </div>
        </div>
    );
};
