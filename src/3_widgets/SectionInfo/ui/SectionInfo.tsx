import classNames from 'classnames';
import cls from './SectionInfo.module.scss';
import {ResponseServiceArticle} from "6_shared/types/ResponseServiceArticle";

interface SectionInfoProps {
    className?: string;
    isHidden: boolean;
    data: ResponseServiceArticle;
}

export const SectionInfo = ({ className, isHidden, data }: SectionInfoProps) => {
    return (
        <div className={classNames(cls.section, className)} hidden={isHidden}>
            <div className={classNames(cls.container)}>
                <div className={classNames(cls.shift)}>
                    <div className={classNames(cls.shift__picture)}>
                        <img alt={data.title} src={data.picture} />
                    </div>
                    <div className={classNames(cls.shift__content)}>
                        <h2 className={classNames(cls.title)}>
                            { data.title }
                        </h2>
                        <div className={cls.editor} dangerouslySetInnerHTML={{__html: data.content}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
