import React, {ReactNode} from "react";
import classNames from "classnames";
import styles from "./InputWrapper.module.scss";
import {PageModal} from "2_pages/PageModal";

interface InputWrapperProps {
    title?: string;
    children: ReactNode;
    isRequired?: boolean;
}

export const InputWrapper = ({title, children, isRequired}: InputWrapperProps) => {
    return (
        <div className={classNames(styles['wrapper'])}>
            {title &&
                <p className={classNames(styles['wrapper__title'])}>
                    { title }
                    {isRequired && <span className={classNames(styles['required'])}>*</span>}
                </p>
            }
            { children }
        </div>
    );
};
