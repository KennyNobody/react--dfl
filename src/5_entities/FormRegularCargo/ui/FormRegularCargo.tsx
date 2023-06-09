import styles from "./FormRegularCargo.module.scss";
import React, {useContext} from "react";
import classNames from "classnames";
import {useFormContext, useForm} from "react-hook-form";
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
import {packageList, transportType} from "6_shared/data/select";
import {SelectLib} from "6_shared/ui/SelectLib/ui/SelectLib";
import {Checkbox} from "6_shared/ui/Checkbox/ui/Checkbox";
import {ButtonAdding} from "6_shared/ui/ButtonAdding";
import {TitleSection} from "6_shared/ui/TitleSection";
import {FileUploader} from "6_shared/ui/FileUploader/FileUploader";
import {Radio} from "6_shared/ui/Radio";
import {convertDate} from "6_shared/helpers/convertDate";

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
                    <ItemCargo context={context} index={i}>
                        <div className={classNames(grid['columns'])}>
                            <div className={classNames(grid['columns__col--12'], grid['columns__col--mob-2'])}>
                                <Tabs
                                    selectedTabClassName={classNames(stylesTabs['tab--active'])}
                                >
                                    <TabList className={classNames(stylesTabs['header'])}>
                                        <Tab className={classNames(stylesTabs['tab'])}>Размер</Tab>
                                        <Tab className={classNames(stylesTabs['tab'])}>Объем</Tab>
                                    </TabList>

                                    <TabPanel className={classNames(stylesTabs['content'])}>
                                        <Input
                                            isRequired={i === 1}
                                            placeholderProp={'Длина'}
                                            typeProp={'number'}
                                            name={`items.item-${i}.length`}
                                        />
                                        <Input
                                            isRequired={i === 1}
                                            placeholderProp={'Ширина'}
                                            typeProp={'number'}
                                            name={`items.item-${i}.width`}
                                        />
                                        <Input
                                            isRequired={i === 1}
                                            placeholderProp={'Высота'}
                                            typeProp={'number'}
                                            caption={'М'}
                                            name={`items.item-${i}.height`}
                                        />
                                        <Input
                                            isRequired={i === 1}
                                            placeholderProp={'Вес'}
                                            typeProp={'number'}
                                            caption={'Кг'}
                                            name={`items.item-${i}.weight`}
                                        />
                                    </TabPanel>
                                    <TabPanel className={classNames(stylesTabs['content'])}>
                                        <Input
                                            isRequired={i === 1}
                                            placeholderProp={'Общий объем'}
                                            typeProp={'number'}
                                            caption={'М³'}
                                            name={`items.item-${i}.volume`}
                                        />
                                    </TabPanel>
                                </Tabs>
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
                            grid['columns__col--mob-2'])}
                    >
                        <Caption
                            title={'Откуда:'}
                            caption={getValues('fromCity').label}
                        />
                    </div>
                }
                {getValues('toCity') &&
                    <div
                        className={classNames(grid['columns__col'], grid['columns__col--3'], grid['columns__col--mob-2'])}>
                        <Caption
                            title={'Куда:'}
                            caption={getValues('toCity').label}
                        />
                    </div>
                }
                <div
                    className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <Caption
                        title={'Дата погрузки:'}
                        caption={`${convertDate(getValues('date')[0])} - ${convertDate(getValues('date')[1])}`}
                    />
                </div>
            </div>
            <div className={classNames(grid['columns'], styles['section'])}>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <TitleSection informerId={1} className={styles.title}  text={'Загрузите спецификацию'} />
                    <FileUploader maxSize={10000} context={context} name={'isFiles'} />
                </div>
            </div>
            <TitleSection className={styles.title} text={'Или можете заполнить данные о грузе'} />
            {context.formType !== 'groupage' &&
                <div className={classNames(grid['columns'], styles['section'])}>
                    <div className={classNames(grid['columns__col--12'], grid['columns__col--mob-2'])}>
                        <Radio />
                    </div>
                </div>
            }
            <div className={classNames(grid['columns'], classNames(styles['section']))}>
                <div className={classNames(grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Название груза' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите название'}
                            typeProp={'text'}
                            name={`name`}
                        />
                    </InputWrapper>
                </div>
                {(context.formType === 'regular' && getValues('transportVariation') !== (2 || '2')) &&
                    <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                        <InputWrapper title='Груз упакован' isRequired={false}>
                            <SelectLib
                                listArr={packageList}
                                name={'package'}
                                placeholder={'Выберите способ'}
                                isRequired={false}
                                isMulti={false}
                            />
                        </InputWrapper>
                    </div>
                }

                {(getValues('transportVariation') !== 2 && context.formType === 'regular') &&
                    <div className={classNames(grid['columns__col--6'], grid['columns__col--mob-2'])}>
                        <InputWrapper title={'Общий объем'} isRequired={true}>
                            <Input
                                isRequired={true}
                                placeholderProp={'Укажите объем'}
                                typeProp={'number'}
                                name={`volume`}
                                caption={'М3'}
                            />
                        </InputWrapper>
                    </div>
                }

                <div className={classNames(grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title={'Общий вес'} isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите вес'}
                            typeProp={'number'}
                            name={'fullWeight'}
                            caption={'Кг'}
                        />
                    </InputWrapper>
                </div>

                <div className={classNames(grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Оценочная стоимость груза' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите стоимость'}
                            typeProp={'text'}
                            caption={'₽'}
                            name={`price`}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Количество грузовых мест' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите количество'}
                            typeProp={'number'}
                            name={`places`}
                        />
                    </InputWrapper>
                </div>
                {(getValues('transportVariation') !== 2 && context.formType === 'regular') && <div className={classNames(grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Максимальный размер грузового места' isRequired={true}>
                        <div className={classNames(stylesTabs['content'])}>
                            <Input
                                isRequired={true}
                                placeholderProp={'Длина'}
                                typeProp={'number'}
                                name={`items.item-1.length`}
                            />
                            <Input
                                isRequired={true}
                                placeholderProp={'Ширина'}
                                typeProp={'number'}
                                name={`items.item-1.width`}
                            />
                            <Input
                                isRequired={true}
                                placeholderProp={'Высота'}
                                typeProp={'number'}
                                caption={'М'}
                                name={`items.item-1.height`}
                            />
                        </div>
                    </InputWrapper>
                </div>}
                <div className={classNames(grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Требуемый тип ТС' isRequired={true}>
                        <SelectLib
                            listArr={transportType}
                            name={`transportType`}
                            placeholder={'Выберите тип ТС'}
                            isRequired={true}
                            isMulti={context.formType === 'modal'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Таможенные коды (6 симв.)' isRequired={true}>
                        <Textarea
                            isRequired={true}
                            nameProps={`customsCodes`}
                            placeholderProp={'Укажите таможенные коды'}
                        />
                    </InputWrapper>
                </div>
            </div>
            {(getValues('transportVariation') === 2 || context.formType === 'groupage') && renderList()}
        </>
    )

    return (
        <Form>
            {!context.plugMode && mainForm}
            {context.plugMode && <SectionAdd context={context} buttonEvent={context.nextSection} /> }
            {!context.plugMode && <ButtonNext
                text={buttonText}
                buttonEvent={context.showPlug}
            />}
        </Form>
    )
};
