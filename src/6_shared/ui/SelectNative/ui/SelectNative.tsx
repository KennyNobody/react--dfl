import styles from "./SelectNative.module.scss";
import classNames from "classnames";

interface ItemProp {
    id: number;
    value: string;
    label: string;
}

interface SelectProps {
    listArr: ItemProp[];
}

export const SelectNative = ({listArr}: SelectProps) => {
    return (
        <label className={classNames(styles.label)}>
            <select className={classNames(styles.select)}>
                <option value="">Не выбрано</option>
                {listArr.map((item: ItemProp, index: number) =>
                    <option key={item.id} value={item.value}>
                        {item.label}
                    </option>
                )}
            </select>
        </label>
    );
};
