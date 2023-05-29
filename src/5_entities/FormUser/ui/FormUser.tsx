import React, {useContext} from "react";
import classNames from "classnames";
import {useFormContext} from "react-hook-form";
import grid from "6_shared/styles/columns.module.scss";
import {InputWrapper} from "6_shared/ui/InputWrapper/ui/InputWrapper";
import {Input} from "6_shared/ui/Input/ui/Input";
import {Agreement} from "6_shared/ui/Agreement/ui/Agreement";
import {Form} from "6_shared/ui/Form/Form";
import {ButtonNext} from "6_shared/ui/ButtonNext/ui/ButtonNext";
import {FormContext} from "3_widgets/FormRegular/context/context";
import styles from "5_entities/FormRegularCargo/ui/FormRegularCargo.module.scss";
import {Caption} from "6_shared/ui/Caption/ui/Caption";
import {convertDate} from "6_shared/helpers/convertDate";

interface FormUserInfoProps {
    innerRef: any;
    buttonText: string;
}

export const FormUser = ({innerRef, buttonText}: FormUserInfoProps) => {
    let context = useContext(FormContext);
    const {getValues} = useFormContext();

    return (
        <Form>
            <div
                ref={innerRef}
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
            <div className={classNames(grid.columns)} data-section-name={'userRegular'} >
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='ФИО' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите ФИО'}
                            typeProp={'text'}
                            name={'fullName'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Название организации' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите организацию'}
                            typeProp={'text'}
                            name={'organization'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Телефон' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'+7(___)___-__-__'}
                            typeProp={'tel'}
                            name={'phoneNumber'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Почта' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите почту'}
                            typeProp={'email'}
                            name={'email'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Сайт'>
                        <Input
                            isRequired={false}
                            placeholderProp={'Укажите сайт'}
                            typeProp={'text'}
                            name={'website'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='ИНН' isRequired={true}>
                        <Input
                            isRequired={true}
                            placeholderProp={'Укажите ИНН'}
                            typeProp={'number'}
                            name={'INN'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <Agreement
                        link={'./policy/'}
                        name={'privacyAgreement'}
                        isRequired={true}
                    />
                </div>
            </div>
            <ButtonNext
                text={buttonText}
                buttonEvent={context.submitData}
            />
        </Form>
    );
};
