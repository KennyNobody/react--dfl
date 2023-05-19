import styles from "./SectionAdd.module.scss";
import classNames from "classnames";
import scrollbar from "6_shared/styles/scrollbar.module.scss";
import Icon from "6_shared/assets/icons/icon-fly.svg";
import {useContext} from "react";
import {FormContext} from "3_widgets/FormRegular/context/context";

interface SectionAddProps {
    classname?: string;
    buttonEvent: any;
}

export const SectionAdd = ({classname, buttonEvent}: SectionAddProps) => {
    let context = useContext(FormContext);

    return (
        <div className={classNames(styles['form'], styles[classname])}>
            <div className={classNames(styles['form__content'], scrollbar['scrollbar'])}>
                <div className={classNames(styles['content'])}>
                    <picture className={classNames(styles['picture'])}>
                        <Icon className={classNames(styles['icon'])}/>
                    </picture>
                    <p className={classNames(styles['title'])}>
                        Ускорить обработку заявки?
                    </p>
                    <p className={classNames(styles['caption'])}>
                        Заявки с дополнительными данными в первую <br />
                        очередь проходят обработку
                    </p>
                    <button className={classNames(styles['button'], styles['button--top'])} type={'button'} onClick={context.showPlug}>
                        Ускорить и ввести дополнительные данные
                    </button>
                    <button className={classNames(styles['button'], styles['button--bottom'])} type={'button'} onClick={buttonEvent}>
                        Продолжить без дополнительных данных
                    </button>
                </div>
            </div>
        </div>
    );
};
