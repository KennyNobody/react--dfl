import styles from "./FormMiltimodalCargo.module.scss";
import React, {useContext, useEffect} from "react";
import classNames from "classnames";
import {useFormContext} from "react-hook-form";
import grid from "6_shared/styles/columns.module.scss";
import {Form} from "6_shared/ui/Form/Form";
import {Caption} from "6_shared/ui/Caption/ui/Caption";
import {ButtonNext} from "6_shared/ui/ButtonNext/ui/ButtonNext";
import {SectionAdd} from "5_entities/SectionAdd/SectionAdd";
import {FormContext} from "3_widgets/FormRegular/context/context";
import {convertDate} from "6_shared/helpers/convertDate";

interface FormCargoProps {
    innerRef: any;
    buttonText: string;
}

export const FormMiltimodalCargo = ({innerRef, buttonText}: FormCargoProps) => {
    let context = useContext(FormContext);
    const {getValues} = useFormContext();

    const mainForm = (
        <div
            ref={innerRef}
            data-section-name={'cargoRegular'}
            className={classNames(grid['columns'], styles['section'])}
        >
            {getValues('fromCity') &&
                <div
                    className={classNames(grid['columns__col'], grid['columns__col--3'], grid['columns__col--mob-2'])}>
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
