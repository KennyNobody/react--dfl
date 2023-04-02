import styles from "./FormStockMain.module.scss";
import React, {useContext} from "react";
import classNames from "classnames";
import {useFormContext} from "react-hook-form";
import grid from "6_shared/styles/columns.module.scss";
import {InputWrapper} from "6_shared/ui/InputWrapper/ui/InputWrapper";
import { Form } from "6_shared/ui/Form/Form";
import {Input} from "6_shared/ui/Input/ui/Input";
import {ButtonNext} from "6_shared/ui/ButtonNext/ui/ButtonNext";
import style from "5_entities/TabsFieldSizes/ui/TabsFieldSizes.module.scss";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {FormContext} from "3_widgets/FormStock/context/context";

interface FormUserInfoProps {
    innerRef: any;
    buttonText: string;
}

export const FormStockMain = ({innerRef, buttonText}: FormUserInfoProps) => {
    let context = useContext(FormContext);

    console.log(context);
    const { control, getValues, formState: {errors} } = useFormContext();

    return (
        <Form>
            <div className={classNames(grid['columns'])} data-section-name={'stockMain'} ref={innerRef}>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob--2'])}>
                    <InputWrapper title='Таможенный код (6 симв.)' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Название груза'}
                            typeProp={'text'}
                            name={'cargoName'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob--2'])}>
                    <InputWrapper title='Вес' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите вес'}
                            typeProp={'number'}
                            caption={'Кг'}
                            name={'cargoWeight'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob--2'])}>
                    <InputWrapper title='Объем или размер' isRequired={true}>
                        <Tabs
                            selectedTabClassName={classNames(style['tab--active'])}
                        >
                            <TabList className={classNames(style['header'])}>
                                <Tab className={classNames(style['tab'])}>Размер</Tab>
                                <Tab className={classNames(style['tab'])}>Объем</Tab>
                            </TabList>

                            <TabPanel className={classNames(style['content'])}>
                                <Input
                                    isRequired={true}
                                    placeholderProp={'Общий объем'}
                                    typeProp={'number'}
                                    caption={'М³'}
                                    name={'cargoVolume'}
                                />
                            </TabPanel>
                            <TabPanel className={classNames(style['content'])}>
                                <Input
                                    isRequired={true}
                                    placeholderProp={'Длина'}
                                    typeProp={'number'}
                                    name={'cargoLength'}
                                />
                                <Input
                                    isRequired={true}
                                    placeholderProp={'Ширина'}
                                    typeProp={'number'}
                                    name={'cargoWidth'}
                                />
                                <Input
                                    isRequired={true}
                                    placeholderProp={'Высота'}
                                    typeProp={'number'}
                                    caption={'М'}
                                    name={'cargoHeight'}
                                />
                            </TabPanel>
                        </Tabs>
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
