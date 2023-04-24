import styles from "./FormStockUser.module.scss";
import React, {FormEvent, ReactNode, useContext} from "react";
import classNames from "classnames";
import {useForm, useFormContext} from "react-hook-form";
import grid from "6_shared/styles/columns.module.scss";
import {Dropdown} from "6_shared/ui/Dropdown/ui/Dropdown";
import {InputWrapper} from "6_shared/ui/InputWrapper/ui/InputWrapper";
import {Input} from "6_shared/ui/Input/ui/Input";
import {Agreement} from "6_shared/ui/Agreement/ui/Agreement";
import {Info} from "6_shared/ui/Info/Info";
import {Form} from "6_shared/ui/Form/Form";
import {ButtonNext} from "6_shared/ui/ButtonNext/ui/ButtonNext";
import {FormContext} from "3_widgets/FormStock/context/context";

interface FormUserInfoProps {
    innerRef: any;
    buttonText: string;
}

export const FormStockUser = ({innerRef, buttonText}: FormUserInfoProps) => {
    const { register, getValues } = useFormContext();
    let context = useContext(FormContext);

    return (
        <Form>
            <div className={classNames(grid.columns)} data-section-name={'userRegular'} ref={innerRef}>
                {/*<div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>*/}
                {/*    <Dropdown*/}
                {/*        isOpened={false}*/}
                {/*        title={'Данные о грузе'}*/}
                {/*    >*/}
                {/*        <Info data={getValues()}/>*/}
                {/*    </Dropdown>*/}
                {/*</div>*/}
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
                            isRequired={true}
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
                            typeProp={'text'}
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
