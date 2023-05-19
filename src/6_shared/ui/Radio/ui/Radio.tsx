import classNames from 'classnames';
import cls from './Radio.module.scss';
import {useFormContext} from "react-hook-form";
import {useState} from "react";

interface RadioProps {
    className?: string
}

export const Radio = ({className}: RadioProps) => {
    const { register, formState: {errors} } = useFormContext();

    const [selectedOption, setSelectedOption] = useState(1);

    function handleOptionChange(event: { target: { value: any; }; }) {
        setSelectedOption(+event.target.value);
    }

    return (
        <div className={classNames(cls.parent)}>
            <label className={classNames(cls.label)}>
                <input
                    type="radio"
                    name={'transportType'}
                    value={1}
                    {...register('transportType')}
                    className={classNames(cls.input)}
                    checked={selectedOption === 1}
                    onChange={handleOptionChange}
                />
                <div className={classNames(cls.item)}>
                    Весь транспорт под перевозку
                </div>
            </label>
            <label className={classNames(cls.label)}>
                <input
                    type="radio"
                    name={'transportType'}
                    value={2}
                    {...register('transportType')}
                    className={classNames(cls.input)}
                    checked={selectedOption === 2}
                    onChange={handleOptionChange}
                />
                <div className={classNames(cls.item)}>
                    Сборный груз
                </div>
            </label>
        </div>
    );
};
