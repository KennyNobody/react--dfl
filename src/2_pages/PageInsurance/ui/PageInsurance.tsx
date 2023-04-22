import classNames from "classnames";
import style from "./PageInsurance.module.scss";
import {Title} from "6_shared/ui/Title/Title";
import {Page} from "6_shared/ui/Page/Page";
import {Picture} from "6_shared/ui/Picture/Picture";
import {FormRegular} from "3_widgets/FormRegular/ui/FormRegular";

export const PageInsurance = () => {
    return (
        <Page type={'regular'}>
            <Title text={'Подберем индивидуальные варианты страхования'} />
            <FormRegular
                formType={'regular'}
                serviceTitle={7}
            />
            <Picture preview={'ground'} />
        </Page>
    );
};
