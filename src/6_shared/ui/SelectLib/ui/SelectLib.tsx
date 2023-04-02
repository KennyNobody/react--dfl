import styles from "./SelectLib.module.scss";
import classNames from "classnames";
import Select from "react-select";
import {Controller, useFormContext} from "react-hook-form";
import "6_shared/styles/selectLib.scss";

interface ItemInterface {
    value: string;
    label: string;
}

interface SelectProps {
    listArr: ItemInterface[];
    name: string;
    placeholder: string;
    isRequired: boolean;
    isDisabled?: boolean;
    onChange?: Function;
    isMulti: boolean;
}

export const SelectLib = ({listArr, name, placeholder, isRequired, isDisabled, onChange, isMulti}: SelectProps) => {
    const { control, formState: {errors} } = useFormContext<any>();

    let val = false;

    try {
        if (name.split('.').reduce((acc, key) => acc[key], errors)) val = true;
    } catch {
        val = false;
    }


    return (
        <label className={classNames(styles['label'])}>
            <Controller
                name={name}
                control={control}
                rules={{ required: isRequired }}
                render={({ field }) => (
                    <Select
                        {...field}
                        unstyled
                        className={classNames('react-select', {'error': val })}
                        classNamePrefix={classNames('react-select')}
                        options={listArr}
                        placeholder={placeholder}
                        onChange={(selectedOption) => {
                            field.onChange(selectedOption);
                            if (onChange) onChange();
                        }}
                        isDisabled={isDisabled}
                        isMulti={isMulti}
                    />
                )}
            />
        </label>
    );
};
