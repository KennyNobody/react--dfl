
import styles from "./Caption.module.scss";
import classNames from "classnames";

interface CaptionProps {
    title: string;
    caption: string;
}

export const Caption = ({title, caption}: CaptionProps) => {
    return (
        <div className={classNames(styles['block'])}>
            <h2 className={classNames(styles['title'])}>
                { title }
            </h2>
            <p className={classNames(styles['caption'])}>
                { caption }
            </p>
        </div>
    );
};
