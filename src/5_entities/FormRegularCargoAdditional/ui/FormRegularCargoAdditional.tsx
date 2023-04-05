import styles from "./FormRegularCargoAdditional.module.scss";
import style from "6_shared/styles/tabs.module.scss";
import React, {FormEvent, useContext, useState} from "react";
import classNames from "classnames";
import {Controller, useForm, useFormContext} from "react-hook-form";
import grid from "6_shared/styles/columns.module.scss";
import {InputWrapper} from "6_shared/ui/InputWrapper/ui/InputWrapper";
import {Input} from "6_shared/ui/Input/ui/Input";
import {additionalServices, cities, hazardClass, transportType} from "6_shared/data/select";
import {Textarea} from "6_shared/ui/Textarea/ui/Textarea";
import {TabsFieldSizes} from "5_entities/TabsFieldSizes/ui/TabsFieldSizes";
import {Form} from "6_shared/ui/Form/Form";
import {Caption} from "6_shared/ui/Caption/ui/Caption";
import {SelectLib} from "6_shared/ui/SelectLib/ui/SelectLib";
import {Checkbox} from "6_shared/ui/Checkbox/ui/Checkbox";
import {FileUploader} from "6_shared/ui/FileUploader/FileUploader";
import {ButtonNext} from "6_shared/ui/ButtonNext/ui/ButtonNext";
import {FormContext} from "3_widgets/FormRegular/context/context";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

interface FormCargoRegularProps {
    innerRef: any;
    buttonText: string;
}

export const FormRegularCargoAdditional = ({innerRef, buttonText}: FormCargoRegularProps) => {
    let context = useContext(FormContext);
    const {getValues} = useFormContext();

    return (
        <Form>
            <div className={classNames(grid['columns'], styles['section'])} data-section-name={'cargoRegular'} ref={innerRef}>
                {getValues('fromCity') &&
                    <div className={classNames(grid['columns__col'], grid['columns__col--3'], grid['columns__col--mob--2'])}>
                        <Caption
                            title={'Откуда:'}
                            caption={getValues('fromCity').label}
                        />
                    </div>
                }
                {getValues('toCity') &&
                    <div className={classNames(grid['columns__col'], grid['columns__col--3'], grid['columns__col--mob--2'])}>
                        <Caption
                            title={'Куда:'}
                            caption={getValues('toCity').label}
                        />
                    </div>
                }
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob--2'])}>
                    <Caption
                        title={'Дата погрузки:'}
                        caption={'23.12.2022 - 26.12.2022'}
                    />
                </div>
            </div>
            <div className={classNames(grid['columns'], styles['section'])}>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Максимальный размер грузового места' isRequired={false}>
                        <div className={classNames(grid['columns'], grid['columns--fieldset'])}>
                            <div className={classNames(grid['columns__col'], grid['columns__col--4'], grid['columns__col--mob--2'])}>
                                <Input
                                    isRequired={false}
                                    placeholderProp={'Длина'}
                                    typeProp={'number'}
                                    name={'maxLength'}
                                />
                            </div>
                            <div className={classNames(grid['columns__col'], grid['columns__col--4'], grid['columns__col--mob--2'])}>
                                <Input
                                    isRequired={false}
                                    placeholderProp={'Ширина'}
                                    typeProp={'number'}
                                    name={'maxWidth'}
                                />
                            </div>
                            <div className={classNames(grid['columns__col'], grid['columns__col--4'], grid['columns__col--mob--2'])}>
                                <Input
                                    isRequired={false}
                                    placeholderProp={'Высота'}
                                    typeProp={'number'}
                                    name={'maxHeight'}
                                    caption={'М'}
                                />
                            </div>
                        </div>
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob--2'])}>
                    <InputWrapper title='Дополнительные услуги DFL' isRequired={false}>
                        <SelectLib
                            listArr={additionalServices}
                            name={'additionalServices'}
                            placeholder={'Выберите услуги'}
                            isRequired={false}
                            isMulti={true}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob--2'])}>
                    <InputWrapper title='Среднее число отправок в год' isRequired={false}>
                        <Input
                            isRequired={false}
                            placeholderProp={'Укажите количество'}
                            typeProp={'number'}
                            name={'shipmentsPerYear'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob--2'])}>
                    <InputWrapper title='Наличие класса опасности груза' isRequired={false}>
                        <SelectLib
                            listArr={hazardClass}
                            name={'hazardClass'}
                            placeholder={'Выберите класс опасности'}
                            isRequired={false}
                            isMulti={false}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob--2'])}>
                    <InputWrapper title='Номер UN' isRequired={false}>
                        <Input
                            isRequired={false}
                            placeholderProp={'Укажите номер UN'}
                            typeProp={'text'}
                            name={'unNumber'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob--2'])}>
                    <InputWrapper title='Вес грузовых мест' isRequired={false}>
                        <Input
                            isRequired={false}
                            placeholderProp={'Укажите вес'}
                            typeProp={'number'}
                            name={'fullWeight'}
                            caption={'Кг'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob--2'])}>
                    <InputWrapper title='Объем или размер грузовых мест' isRequired={false}>
                        <Tabs
                            selectedTabClassName={classNames(style['tab--active'])}
                        >
                            <TabList className={classNames(style['header'])}>
                                <Tab className={classNames(style['tab'])}>Размер</Tab>
                                <Tab className={classNames(style['tab'])}>Объем</Tab>
                            </TabList>

                            <TabPanel className={classNames(style['content'])}>
                                <Input
                                    isRequired={false}
                                    placeholderProp={'Общий объем'}
                                    typeProp={'text'}
                                    caption={'М³'}
                                    name={'cargoVolume'}
                                />
                            </TabPanel>
                            <TabPanel className={classNames(style['content'])}>
                                <Input
                                    isRequired={false}
                                    placeholderProp={'Длина'}
                                    typeProp={'text'}
                                    name={'cargoLength'}
                                />
                                <Input
                                    isRequired={false}
                                    placeholderProp={'Ширина'}
                                    typeProp={'text'}
                                    name={'cargoWidth'}
                                />
                                <Input
                                    isRequired={false}
                                    placeholderProp={'Высота'}
                                    typeProp={'text'}
                                    caption={'М'}
                                    name={'cargoHeight'}
                                />
                            </TabPanel>
                        </Tabs>
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob--2'])}>
                    <InputWrapper title='Дополнительные пожелания к отгрузке' isRequired={false}>
                        <Textarea
                            isRequired={false}
                            nameProps={'cargoDescription'}
                            placeholderProp={'Расскажите о пожелания'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob--2'])}>
                    <InputWrapper title='Были ли трудности в предыдущих поставках' isRequired={false}>
                        <Textarea
                            isRequired={false}
                            nameProps={'pastExperience'}
                            placeholderProp={'Расскажите о трудностях'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob--2'])}>
                    <Checkbox caption={'Производились ранее поставки от данного производителя'} name={'deliveriesAlreadyBeen'} />
                </div>
            </div>

            <ButtonNext
                text={buttonText}
                buttonEvent={context.showPlug}
            />
        </Form>
    );
};
