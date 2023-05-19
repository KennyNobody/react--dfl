import React, {FormEvent, useContext, useState} from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

import style from "./FormStockCargo.module.scss";
import grid from "6_shared/styles/columns.module.scss";

import classNames from "classnames";
import {useFormContext} from "react-hook-form";
import {InputWrapper} from "6_shared/ui/InputWrapper/ui/InputWrapper";
import {Input} from "6_shared/ui/Input/ui/Input";
import {Textarea} from "6_shared/ui/Textarea/ui/Textarea";
import {Form} from "6_shared/ui/Form/Form";
import {SectionAdd} from "5_entities/SectionAdd/SectionAdd";
import {Dropdown} from "6_shared/ui/Dropdown/ui/Dropdown";
import {ButtonNext} from "6_shared/ui/ButtonNext/ui/ButtonNext";
import {FormContext} from "3_widgets/FormStock/context/context";

interface FormCargoStockProps {
    innerRef: any;
    buttonText: string;
}

export const FormStockCargo = ({innerRef, buttonText}: FormCargoStockProps) => {
    let context = useContext(FormContext);
    const { control, getValues, formState: {errors} } = useFormContext();

    return (
        <Form>
            <Dropdown
                isOpened={true}
                title={'Данные о грузе'}
            >
                <div className={classNames(grid['columns'])} data-section-name={'cargoStock'} ref={innerRef}>
                    <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                        <InputWrapper title='Массогабаритные характеристики грузового места' isRequired={true} line={true}>
                            <Input
                                isRequired={true}
                                placeholderProp={'Длина'}
                                typeProp={'number'}
                                name={'length'}
                            />
                            <Input
                                isRequired={true}
                                placeholderProp={'Ширина'}
                                typeProp={'number'}
                                name={'width'}
                            />
                            <Input
                                isRequired={true}
                                placeholderProp={'Высота'}
                                typeProp={'number'}
                                caption={'М'}
                                name={'height'}
                            />
                            <Input
                                isRequired={true}
                                placeholderProp={'Вес'}
                                typeProp={'number'}
                                caption={'Кг'}
                                name={'weight'}
                            />
                        </InputWrapper>
                    </div>

                    <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                        <InputWrapper title='Средний остаток товара на складе в месяц' isRequired={true}>
                            <Tabs
                                selectedTabClassName={classNames(style['tab--active'])}
                            >
                                <TabList className={classNames(style['header'])}>
                                    <Tab className={classNames(style['tab'])}>М3</Tab>
                                    <Tab className={classNames(style['tab'])}>Кол-во грузовых мест</Tab>
                                </TabList>

                                <TabPanel className={classNames(style['content'])}>
                                    <Input
                                        isRequired={true}
                                        placeholderProp={'Укажите объем'}
                                        typeProp={'number'}
                                        caption={'М³'}
                                        name={'balancePerMonthVolume'}
                                    />
                                </TabPanel>
                                <TabPanel className={classNames(style['content'])}>
                                    <Input
                                        isRequired={true}
                                        placeholderProp={'Укажите количество'}
                                        typeProp={'text'}
                                        caption={'Паллет'}
                                        name={'balancePerMonthQuantity'}
                                    />
                                </TabPanel>
                            </Tabs>
                        </InputWrapper>
                    </div>
                    <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                        <InputWrapper title='Средний объем поступления в месяц' isRequired={true}>
                            <Tabs
                                selectedTabClassName={classNames(style['tab--active'])}
                            >
                                <TabList className={classNames(style['header'])}>
                                    <Tab className={classNames(style['tab'])}>М3</Tab>
                                    <Tab className={classNames(style['tab'])}>Кол-во грузовых мест</Tab>
                                </TabList>

                                <TabPanel className={classNames(style['content'])}>
                                    <Input
                                        isRequired={true}
                                        placeholderProp={'Укажите объем'}
                                        typeProp={'text'}
                                        caption={'М³'}
                                        name={'averageReceiptMonthVolume'}
                                    />
                                </TabPanel>
                                <TabPanel className={classNames(style['content'])}>
                                    <Input
                                        isRequired={true}
                                        placeholderProp={'Укажите количество'}
                                        typeProp={'text'}
                                        caption={'Паллет'}
                                        name={'averageReceiptMonthQuantity'}
                                    />
                                </TabPanel>
                            </Tabs>
                        </InputWrapper>
                    </div>
                    <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                        <InputWrapper title='Средний объем отгрузок со склада в месяц' isRequired={true}>
                            <Tabs
                                selectedTabClassName={classNames(style['tab--active'])}
                            >
                                <TabList className={classNames(style['header'])}>
                                    <Tab className={classNames(style['tab'])}>М3</Tab>
                                    <Tab className={classNames(style['tab'])}>Кол-во грузовых мест</Tab>
                                </TabList>

                                <TabPanel className={classNames(style['content'])}>
                                    <Input
                                        isRequired={true}
                                        placeholderProp={'Укажите объем'}
                                        typeProp={'number'}
                                        caption={'М³'}
                                        name={'averageShipmentVolume'}
                                    />
                                </TabPanel>
                                <TabPanel className={classNames(style['content'])}>
                                    <Input
                                        isRequired={true}
                                        placeholderProp={'Укажите количество'}
                                        typeProp={'number'}
                                        caption={'Паллет'}
                                        name={'averageShipmentQuantity'}
                                    />
                                </TabPanel>
                            </Tabs>
                        </InputWrapper>
                    </div>
                    <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                        <InputWrapper title='Описание груза' isRequired={true}>
                            <Textarea
                                isRequired={true}
                                nameProps={'cargoDescription'}
                                placeholderProp={'Опишите груз'}
                            />
                        </InputWrapper>
                    </div>
                </div>
            </Dropdown>
            <ButtonNext
                text={buttonText}
                buttonEvent={context.nextSection}
            />
        </Form>
    );
};
