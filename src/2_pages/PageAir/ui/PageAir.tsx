import classNames from "classnames";
import style from "./PageAir.module.scss";
import {Title} from "6_shared/ui/Title/Title";
import {Page} from "6_shared/ui/Page/Page";
import {Picture} from "6_shared/ui/Picture/Picture";
import {Wrapper} from "6_shared/ui/Wrapper/Wrapper";
import {FormRegular} from "3_widgets/FormRegular/ui/FormRegular";

export const PageAir = () => {
    return (
        <Page type={'regular'}>
            <Title text={'Мы предлагаем регулярные грузовые авиаперевозки'} />
            <FormRegular/>
            <Picture preview={'air'} />
        </Page>
    );
};
