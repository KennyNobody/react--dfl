import classNames from "classnames";
import style from "./PageSea.module.scss";
import {Title} from "6_shared/ui/Title/Title";
import {Page} from "6_shared/ui/Page/Page";
import {Picture} from "6_shared/ui/Picture/Picture";
import {FormRegular} from "3_widgets/FormRegular/ui/FormRegular";

export const PageSea = () => {
    return (
        <Page type={'regular'}>
            <Title text={'Мы предлагаем регулярные грузовые морские перевозки'} />
            <FormRegular serviceType={'морские перевозки'}/>
            <Picture preview={'sea'} />
        </Page>
    );
};
