import grid from "6_shared/styles/columns.module.scss";
import styles from "./FormCustomsCargoAdditional.module.scss";
import classNames from "classnames";
import {useFormContext} from "react-hook-form";
import {Form} from "6_shared/ui/Form/Form";
import {Input} from "6_shared/ui/Input/ui/Input";
import {Caption} from "6_shared/ui/Caption/ui/Caption";
import {Textarea} from "6_shared/ui/Textarea/ui/Textarea";
import {InputWrapper} from "6_shared/ui/InputWrapper/ui/InputWrapper";
import {ButtonNext} from "6_shared/ui/ButtonNext/ui/ButtonNext";
import React, {useContext} from "react";
import {FormContext} from "3_widgets/FormCustoms/context/context";

interface FormCargoProps {
    innerRef: any;
    buttonText: string;
}

export const FormCustomsCargoAdditional = ({innerRef, buttonText}: FormCargoProps) => {
    let context = useContext(FormContext);
    const {getValues} = useFormContext();

    return (
        <Form>
            <div className={classNames(grid['columns'], styles['section'])} data-section-name={'cargoCustomAdditional'} ref={innerRef}>
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
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Последнее таможенное оформление' isRequired={false}>
                        <Input
                            isRequired={false}
                            placeholderProp={'Укажите терминал'}
                            typeProp={'text'}
                            name={'terminal'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--6'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Ожидаемое количество поставок в год ' isRequired={false}>
                        <Input
                            isRequired={false}
                            placeholderProp={'Укажите количество'}
                            typeProp={'number'}
                            name={'quantityShipsYear'}
                        />
                    </InputWrapper>
                </div>
                <div className={classNames(grid['columns__col'], grid['columns__col--12'], grid['columns__col--mob-2'])}>
                    <InputWrapper title='Дополнительные пожелания' isRequired={false}>
                        <Textarea
                            isRequired={false}
                            nameProps={'wishes'}
                            placeholderProp={'Расскажите о пожеланиях'}
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
