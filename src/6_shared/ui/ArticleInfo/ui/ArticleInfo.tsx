
import style from "./ArticleInfo.module.scss";
import classNames from "classnames";

type Size = 'small' | 'full';

interface ArticleInfoProps {
    title: string;
    text: string;
    size: Size
}

export const ArticleInfo = ({title, text, size}: ArticleInfoProps) => {
    return (
        <div className={classNames(style['article-info'], style[`article-info--${size}`])}>
            <div className={classNames(style['article-info__column'])}>
                { title }
            </div>
            <div className={classNames(style['article-info__column'])}>
                { text }
            </div>
        </div>
    );
};
