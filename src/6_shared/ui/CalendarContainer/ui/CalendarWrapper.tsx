import styles from "./CalendarWrapper.module.scss";
import {ReactNode} from "react";
import classNames from "classnames";
import {CalendarContainer} from "react-datepicker";

interface CalendarWrapperProps {
    children: ReactNode
}

export const CalendarWrapper = ({children}: CalendarWrapperProps) => {
    return (
        <CalendarContainer className={classNames(styles['wrapper'])}>
            <div className={classNames(styles['header'])}>
                <p className={classNames(styles['title'])}>
                    Выберите дату
                </p>
                <p className={classNames(styles['caption'])}>
                    Если не знаете точную дату погрузки, то укажите интервал
                </p>
            </div>
            <div className={classNames(styles['main'])}>
                { children }
            </div>
        </CalendarContainer>
    );
};
