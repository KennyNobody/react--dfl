import Icon from "6_shared/assets/icons/icon-close.svg";
import style from "./Alert.module.scss";
import classNames from "classnames";

interface AlertProps {
    closeModal: () => void
}

export const Alert = ({closeModal}: AlertProps) => {
    return (
        <div className={classNames(style['block'])}>
            <div className={classNames(style['block__content'])}>
                Заполните обязательные поля
            </div>
            <button type='button' className={classNames(style['block__button'])} onClick={closeModal}>
                <Icon className={classNames(style['block__icon'])}/>
            </button>
        </div>
    );
};
