
import cls from "./Title.module.scss";
import classNames from "classnames";

interface TitleProps {
    className?: string
    text: string
}

export const Title = ({className, text}: TitleProps) => {
    return (
        <h2 className={classNames(cls.title)}>
            { text }
        </h2>
    );
};
