import React, {useContext, useState} from "react";

import styles from "./FormCustomsPath.module.scss";
import grid from "6_shared/styles/columns.module.scss";

import classNames from "classnames";
import {countries, cities} from "6_shared/data/select";

import { Form } from "6_shared/ui/Form/Form";
import {useFormContext} from "react-hook-form";
import {InputWrapper} from "6_shared/ui/InputWrapper/ui/InputWrapper";
import {SelectLib} from "6_shared/ui/SelectLib/SelectLib";
import {ButtonNext} from "6_shared/ui/ButtonNext/ui/ButtonNext";
import {FormContext} from "3_widgets/FormCustoms/context/context";
import {ButtonRevert} from "6_shared/ui/ButtonRevert/ui/ButtonRevert";

interface FormUserInfoProps {
    innerRef: any;
    buttonText: string;
}

export const FormCustomsPath = ({innerRef, buttonText}: FormUserInfoProps) => {
    let context = useContext(FormContext);
    const { getValues, formState: {errors} } = useFormContext();

    const [cityFromIsDisabled, setCityFromIsDisabled] = useState<boolean>(!!!getValues('fromCity'));
    const [cityToIsDisabled, setCityToIsDisabled] = useState<boolean>(!!!getValues('toCity'));

    const enableCityFrom = () => setCityFromIsDisabled(false);
    const enableCityTo = () => setCityToIsDisabled(false);
    return (
        <Form>
            <div className={classNames(grid['columns'])} data-section-name={'pathCustom'} ref={innerRef}>
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
                                    inputHandleMethod={(val: string) => context.debouncedUpdatePlacesList(val, 'from')}
                                />
                            </InputWrapper>
                        </div>
                        <ButtonRevert type={'bottom'} onClickEvent={context.revertPlaces}/>
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
                                    inputHandleMethod={(val: string) => context.debouncedUpdatePlacesList(val, 'to')}
                                />
                            </InputWrapper>
                        </div>
                    </div>
                </div>
            </div>
            <ButtonNext
                text={buttonText}
                buttonEvent={context.nextSection}
            />
        </Form>
    );
};
