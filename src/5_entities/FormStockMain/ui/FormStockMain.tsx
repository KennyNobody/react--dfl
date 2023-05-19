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
import {TitleSection} from "6_shared/ui/TitleSection";
import {FileUploader} from "6_shared/ui/FileUploader/ui/FileUploader";
import {Textarea} from "6_shared/ui/Textarea/ui/Textarea";

interface FormUserInfoProps {
    innerRef: any;
    buttonText: string;
}

export const FormStockMain = ({innerRef, buttonText}: FormUserInfoProps) => {
    let context = useContext(FormContext);
    const { control, getValues, formState: {errors} } = useFormContext();

    return (
        <Form>
            <div className={classNames(grid['columns'], styles['section'])}>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <TitleSection className={styles.title}  text={'Загрузите спецификацию'} />
                    <FileUploader context={context} name={'isFiles'} />
                </div>
            </div>
            <TitleSection className={styles.title}  text={'Или заполните данные о грузе'} />
            <div className={classNames(grid['columns'])} data-section-name={'stockMain'} ref={innerRef}>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Название груза' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите название'}
                            typeProp={'text'}
                            name={'name'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Количество позиций SKU на хранении' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите количество'}
                            typeProp={'number'}
                            name={'skuPositionQuantity'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Среднее кол-во позиций в товарной накладной на отгрузку товара со склада' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите количество'}
                            typeProp={'number'}
                            name={'averagePositionQuantity'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Среднее кол-во отправок со склада' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите количество'}
                            typeProp={'number'}
                            name={'averageSendingQuantity'}
                            caption={'В мес.'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Среднее кол-во поступлений на склад' isRequired={true}>
                        <Input
                            isRequired={true}
                            typeProp={'number'}
                            placeholderProp={'Укажите количество'}
                            caption={'В мес.'}
                            name={'averageArrivalQuantity'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Описание груза' isRequired={true}>
                        <Textarea
                            isRequired={true}
                            nameProps={`caption`}
                            placeholderProp={'Опишите груз'}
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
