import React, {ReactNode} from "react";
import classNames from "classnames";
import styles from "./InputWrapper.module.scss";
import {PageModal} from "2_pages/PageModal";

interface InputWrapperProps {
    title?: string;
    children: ReactNode;
    isRequired?: boolean;
    line?: boolean;
}

export const InputWrapper = ({title, children, isRequired, line}: InputWrapperProps) => {
    return (
        <div className={classNames(styles['wrapper'])}>
            {title &&
                <p className={classNames(styles['wrapper__title'])}>
                    { title }
                    {isRequired && <span className={classNames(styles['required'])}>*</span>}
                </p>
            }
            <div className={classNames({[styles['line']]: line})}>
                { children }
            </div>
        </div>
    );
};
