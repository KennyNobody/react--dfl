import styles from "./FormRegularPath.module.scss";
import React, {useContext, useEffect, useState} from "react";
import classNames from "classnames";
import {Controller, useForm, useFormContext} from "react-hook-form";
import grid from "6_shared/styles/columns.module.scss";
import {InputWrapper} from "6_shared/ui/InputWrapper/ui/InputWrapper";
import {ButtonRevert} from "6_shared/ui/ButtonRevert/ui/ButtonRevert";
import DatePicker from "react-datepicker";
import {CalendarWrapper} from "6_shared/ui/CalendarContainer/ui/CalendarWrapper";
import { Form } from "6_shared/ui/Form/Form";
import {countries, cities} from "6_shared/data/select";
import {SelectLib} from "6_shared/ui/SelectLib/SelectLib";
import {Caption} from "6_shared/ui/Caption/Caption";
import {ButtonNext} from "6_shared/ui/ButtonNext/ui/ButtonNext";
import {FormContext} from "3_widgets/FormRegular/context/context";

interface FormUserInfoProps {
    innerRef: any;
    buttonText: string;
}

export const FormRegularPath = ({innerRef, buttonText}: FormUserInfoProps) => {
    const { control, watch, getValues, formState: {errors} } = useFormContext();
    let context = useContext(FormContext);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    // const onChangeDate = (dates: [Date, Date]) => {
    //     const [start, end] = dates;
    //     setStartDate(start);
    //     setEndDate(end);
    // };

    const date = watch('date');

    useEffect(() => {
        setStartDate(date[0]);
        setEndDate(date[1]);
    }, [date]);

    const [cityFromIsDisabled, setCityFromIsDisabled] = useState<boolean>(!!!getValues('fromCity'));
    const [cityToIsDisabled, setCityToIsDisabled] = useState<boolean>(!!!getValues('toCity'));

    const enableCityFrom = () => setCityFromIsDisabled(false);
    const enableCityTo = () => setCityToIsDisabled(false);

    const revertValues = () => {
        alert('Это функционал заработает, когда будут реальные данные об адресах');
    }

    return (
        <Form>
            <div className={classNames(grid['columns'])} data-section-name={'pathRegular'} ref={innerRef}>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob--2'])}>
                    <div className={classNames(grid['columns'], grid['columns--end'])}>
                        <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob--2'])}>
                            <InputWrapper title='Откуда' isRequired={true}>
                                <SelectLib
                                    listArr={countries}
                                    name={'fromCountry'}
                                    placeholder={'Выберите страну'}
                                    isRequired={true}
                                    onChange={enableCityFrom}
                                    isMulti={false}
                                />
                            </InputWrapper>
                        </div>
                        <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob--2'])}>
                            <InputWrapper>
                                <SelectLib
                                    listArr={cities}
                                    name={'fromCity'}
                                    placeholder={'Укажите город'}
                                    isRequired={true}
                                    isDisabled={cityFromIsDisabled}
                                    isMulti={false}
                                />
                            </InputWrapper>
                        </div>
                        <ButtonRevert type={'bottom'} onClickEvent={revertValues}/>
                    </div>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'])}>
                    <div className={classNames(grid['columns'], grid['columns--end'])}>
                        <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob--2'])}>
                            <InputWrapper title='Куда' isRequired={true}>
                                <SelectLib
                                    listArr={countries}
                                    name={'toCountry'}
                                    placeholder={'Выберите страну'}
                                    isRequired={true}
                                    onChange={enableCityTo}
                                    isMulti={false}
                                />
                            </InputWrapper>
                        </div>
                        <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob--2'])}>
                            <InputWrapper>
                                <SelectLib
                                    listArr={cities}
                                    name={'toCity'}
                                    placeholder={'Укажите город'}
                                    isRequired={true}
                                    isDisabled={cityToIsDisabled}
                                    isMulti={false}
                                />
                            </InputWrapper>
                        </div>
                    </div>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'])}>
                    {/* TODO Возможно стоит сделать переключение типа с range на обычный */}
                    <InputWrapper title='Примерная дата погрузки' isRequired={true}>
                        <Controller
                            name={"date"}
                            control={control}
                            rules={{ required: true }}
                            defaultValue={[null, null]}
                            render={({ field }) => {
                                return (
                                    <DatePicker
                                        locale="ru"
                                        calendarContainer={CalendarWrapper}
                                        dateFormat="dd.MM.yyyy"
                                        onChange = {(val) => {
                                            setStartDate(val[0]);
                                            setEndDate(val[1]);
                                            field.onChange(val);
                                        }}
                                        startDate={startDate}
                                        endDate={endDate}
                                        selected={startDate}
                                        // value={field.value}
                                        placeholderText="Выберите дату или интервал"
                                        className={errors["date"] ? "datepickerField error" : "datepickerField"}
                                        selectsRange
                                    />
                                );
                            }}
                        />
                    </InputWrapper>
                </div>
            </div>
            <ButtonNext
                text={buttonText}
                buttonEvent={context.nextSection}
            />
        </Form>
    );
};
