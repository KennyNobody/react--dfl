import styles from "./FormRegularCargo.module.scss";
import React, {useContext, useEffect} from "react";
import classNames from "classnames";
import {useFormContext} from "react-hook-form";
import grid from "6_shared/styles/columns.module.scss";
import {Form} from "6_shared/ui/Form/Form";
import {Caption} from "6_shared/ui/Caption/ui/Caption";
import {ButtonNext} from "6_shared/ui/ButtonNext/ui/ButtonNext";
import {SectionAdd} from "5_entities/SectionAdd/SectionAdd";
import {FormContext} from "3_widgets/FormRegular/context/context";
import {ItemCargo} from "6_shared/ui/ItemCargo/ItemCargo";
import {Input} from "6_shared/ui/Input/ui/Input";
import {InputWrapper} from "6_shared/ui/InputWrapper/ui/InputWrapper";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import stylesTabs from '6_shared/styles/tabs.module.scss';
import {Textarea} from "6_shared/ui/Textarea/ui/Textarea";
import {transportType} from "6_shared/data/select";
import {SelectLib} from "6_shared/ui/SelectLib/ui/SelectLib";
import {Checkbox} from "6_shared/ui/Checkbox/ui/Checkbox";
import {FileUploader} from "6_shared/ui/FileUploader/FileUploader";

interface FormCargoProps {
    innerRef: any;
    buttonText: string;
}

export const FormRegularCargo = ({innerRef, buttonText}: FormCargoProps) => {
    let context = useContext(FormContext);
    const {getValues} = useFormContext();

    const renderList = () => {
        const components = [];

        for (let i = 1; i <= context.itemsList; i++) {
            components.push(
                <div className={styles['section']}  key={i}>
                    <ItemCargo context={context} index={i} isActive={context.isMultiItems}>
                        <div className={classNames(grid['columns'])}>
                            <div className={classNames(grid['columns__col--6'], grid['columns__col--mob-2'])}>
                                <InputWrapper title='Название груза' isRequired={true}>
                                    <Input
                                        isRequired={true}
                                        placeholderProp={'Укажите название'}
                                        typeProp={'text'}
                                        name={`items.item-${i}.name`}
                                    />
                                </InputWrapper>
                            </div>
                            <div className={classNames(grid['columns__col--6'], grid['columns__col--mob-2'])}>
                                <InputWrapper title='Вес' isRequired={true}>
                                    <Input
                                        isRequired={true}
                                        placeholderProp={'Укажите вес'}
                                        typeProp={'number'}
                                        name={`items.item-${i}.weight`}
                                    />
                                </InputWrapper>
                            </div>
                            <div className={classNames(grid['columns__col--12'], grid['columns__col--mob-2'])}>
                                <Tabs
                                    selectedTabClassName={classNames(stylesTabs['tab--active'])}
                                >
                                    <TabList className={classNames(stylesTabs['header'])}>
                                        <Tab className={classNames(stylesTabs['tab'])}>Объем</Tab>
                                        <Tab className={classNames(stylesTabs['tab'])}>Размер</Tab>
                                    </TabList>

                                    <TabPanel className={classNames(stylesTabs['content'])}>
                                        <Input
                                            isRequired={true}
                                            placeholderProp={'Общий объем'}
                                            typeProp={'number'}
                                            caption={'М³'}
                                            name={`items.item-${i}.volume`}
                                        />
                                    </TabPanel>
                                    <TabPanel className={classNames(stylesTabs['content'])}>
                                        <Input
                                            isRequired={true}
                                            placeholderProp={'Длина'}
                                            typeProp={'number'}
                                            name={`items.item-${i}.length`}
                                        />
                                        <Input
                                            isRequired={true}
                                            placeholderProp={'Ширина'}
                                            typeProp={'number'}
                                            name={`items.item-${i}.width`}
                                        />
                                        <Input
                                            isRequired={true}
                                            placeholderProp={'Высота'}
                                            typeProp={'number'}
                                            caption={'М'}
                                            name={`items.item-${i}.height`}
                                        />
                                    </TabPanel>
                                </Tabs>
                            </div>
                            <div className={classNames(grid['columns__col--6'], grid['columns__col--mob-2'])}>
                                <InputWrapper title='Оценочная стоимость груза' isRequired={true}>
                                    <Input
                                        // TODO Вставить маску
                                        isRequired={true}
                                        placeholderProp={'Укажите стоимость'}
                                        typeProp={'text'}
                                        caption={'₽'}
                                        name={`items.item-${i}.price`}
                                    />
                                </InputWrapper>
                            </div>
                            <div className={classNames(grid['columns__col--6'], grid['columns__col--mob-2'])}>
                                <InputWrapper title='Количество грузовых мест' isRequired={true}>
                                    <Input
                                        isRequired={true}
                                        placeholderProp={'Укажите количество'}
                                        typeProp={'number'}
                                        name={`items.item-${i}.places`}
                                    />
                                </InputWrapper>
                            </div>
                            <div className={classNames(grid['columns__col--6'], grid['columns__col--mob-2'])}>
                                <InputWrapper title='Таможенный код (6 симв.)' isRequired={true}>
                                    <Input
                                        isRequired={true}
                                        placeholderProp={'Укажите таможенный код'}
                                        typeProp={'text'}
                                        name={`items.item-${i}.value`}
                                    />
                                </InputWrapper>
                            </div>
                            <div className={classNames(grid['columns__col--6'], grid['columns__col--mob-2'])}>
                                <InputWrapper title='Требуемый тип ТС' isRequired={true}>
                                    <SelectLib
                                        listArr={transportType}
                                        name={`items.item-${i}.transportType`}
                                        placeholder={'Выберите тип'}
                                        isRequired={true}
                                        isMulti={context.formType === 'modal'}
                                    />
                                </InputWrapper>
                            </div>
                            <div className={classNames(grid['columns__col--12'], grid['columns__col--mob-2'])}>
                                <InputWrapper title='Описание груза' isRequired={true}>
                                    <Textarea
                                        isRequired={true}
                                        nameProps={`items.item-${i}.caption`}
                                        placeholderProp={'Введите описание'}
                                    />
                                </InputWrapper>
                            </div>
                            <div className={classNames(grid['columns__col--12'], grid['columns__col--mob-2'])}>
                                <FileUploader name={`isFile-${i}`} />
                            </div>
                        </div>
                    </ItemCargo>
                </div>
            );
        }

        return components;
    };

    const mainForm = (
        <>
            <div
                ref={innerRef}
                data-section-name={'cargoRegular'}
                className={classNames(grid['columns'], styles['section'])}
            >
                {getValues('fromCity') &&
                    <div
                        className={classNames(grid['columns__col'],
                            grid['columns__col--3'],
                            grid['columns__col--mob--2'])}
                    >
                        <Caption
                            title={'Откуда:'}
                            caption={getValues('fromCity').label}
                        />
                    </div>
                }
                {getValues('toCity') &&
                    <div
                        className={classNames(grid['columns__col'], grid['columns__col--3'], grid['columns__col--mob--2'])}>
                        <Caption
                            title={'Куда:'}
                            caption={getValues('toCity').label}
                        />
                    </div>
                }
                <div
                    className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob--2'])}>
                    <Caption
                        title={'Дата погрузки:'}
                        caption={'23.12.2022 - 26.12.2022'}
                    />
                </div>
            </div>
            {context.formType !== 'groupage' &&
                <div className={classNames(grid['columns'], styles['section'])}>
                    <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob--2'])}>
                        <Checkbox
                            caption={'Необходим полный объем транспорта под перевозку'}
                            name={'neededFullVolume'}
                        />
                    </div>
                    <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob--2'])}>
                        <Checkbox
                            caption={'Сборный груз'}
                            name={'isGroupage'}
                        />
                    </div>
                </div>
            }
            {renderList()}
        </>
    )

    return (
        <Form>
            {!context.plugMode && mainForm}
            {context.plugMode && <SectionAdd buttonEvent={context.nextSection} /> }
            <ButtonNext
                text={buttonText}
                buttonEvent={context.showPlug}
            />
        </Form>
    )
};
