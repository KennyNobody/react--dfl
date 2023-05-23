import styles from "./FormCustomsCargo.module.scss";
import React, {useContext} from "react";
import classNames from "classnames";
import {useFormContext} from "react-hook-form";
import grid from "6_shared/styles/columns.module.scss";
import {InputWrapper} from "6_shared/ui/InputWrapper/ui/InputWrapper";
import {Input} from "6_shared/ui/Input/ui/Input";
import {countries, deliveryCondition, procedure} from "6_shared/data/select";
import {Textarea} from "6_shared/ui/Textarea/ui/Textarea";
import {Form} from "6_shared/ui/Form/Form";
import {SectionAdd} from "5_entities/SectionAdd/SectionAdd";
import {Caption} from "6_shared/ui/Caption/ui/Caption";
import {SelectLib} from "6_shared/ui/SelectLib/ui/SelectLib";
import {ButtonNext} from "6_shared/ui/ButtonNext/ui/ButtonNext";
import {FormContext} from "3_widgets/FormCustoms/context/context";
import {TitleSection} from "6_shared/ui/TitleSection";
import {FileUploader} from "6_shared/ui/FileUploader/ui/FileUploader";

interface FormCargoProps {
    innerRef: any;
    buttonText: string;
}

export const FormCustomsCargo = ({innerRef, buttonText}: FormCargoProps) => {
    let context = useContext(FormContext);
    const {getValues, watch} = useFormContext();
    const textareaRequired = watch('valuesList');

    const mainForm = (
        <div>
            <div
                ref={innerRef}
                data-section-name={'customCargo'}
                className={classNames(grid['columns'], styles['section'])}
            >
                {getValues('fromCity') &&
                    <div className={classNames(grid['columns__col'], grid['columns__col--3'], grid['columns__col--mob-2'])}>
                        <Caption
                            title={'Откуда:'}
                            caption={getValues('fromCity').label}
                        />
                    </div>
                }
                {getValues('toCity') &&
                    <div className={classNames(grid['columns__col'], grid['columns__col--3'], grid['columns__col--mob-2'])}>
                        <Caption
                            title={'Куда:'}
                            caption={getValues('toCity').label}
                        />
                    </div>
                }
            </div>
            <div className={classNames(grid['columns'], styles['section'])}>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <TitleSection informerId={2} className={styles.title}  text={'Загрузите спецификацию'} />
                    <FileUploader maxSize={20000} context={context} name={'isFiles'} />
                </div>
            </div>
            <TitleSection className={styles.title} text={'Или можете заполнить данные о грузе'} />
            <div className={classNames(grid['columns'], styles['section'])}>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Наименование (описание груза)' isRequired={!textareaRequired}>
                        <Textarea
                            isRequired={!textareaRequired}
                            nameProps={'cargoDescription'}
                            placeholderProp={'Укажите название и опишите груз'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Таможенная процедура' isRequired={true}>
                        <SelectLib
                            listArr={procedure}
                            name={`procedure`}
                            placeholder={'Выберите таможенную процедуру'}
                            isRequired={true}
                            isMulti={false}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Условие поставки' isRequired={true}>
                        <SelectLib
                            listArr={deliveryCondition}
                            name={`deliveryCondition`}
                            placeholder={'Выберите условие'}
                            isRequired={true}
                            isMulti={false}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Список кодов ТН ВЭД в инвойсе' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите коды'}
                            typeProp={'text'}
                            name={'valuesList'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Страна происхождения груза' isRequired={true}>
                        <SelectLib
                            listArr={countries}
                            name={'cargoFromCountry'}
                            placeholder={'Выберите страну'}
                            isRequired={true}
                            isMulti={false}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Укажите количество мест' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите количество'}
                            typeProp={'number'}
                            name={'quantityPlaces'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Вес нетто' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите вес'}
                            typeProp={'number'}
                            caption={'Кг'}
                            name={'netWeight'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Вес брутто' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите вес'}
                            typeProp={'number'}
                            caption={'Кг'}
                            name={'grossWeight'}
                        />
                    </InputWrapper>
                </div>

                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Инвойсная стоимость' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите стоимость'}
                            typeProp={'text'}
                            caption={'₽'}
                            name={'invoicePrice'}
                        />
                    </InputWrapper>
                </div>
            </div>
        </div>
    )

    return (
        <Form>
            {!context.plugMode && mainForm}
            {context.plugMode && <SectionAdd context={context} buttonEvent={context.nextSection} />}
            {!context.plugMode && <ButtonNext
                text={buttonText}
                buttonEvent={context.showPlug}
            />}
        </Form>
    );
};
