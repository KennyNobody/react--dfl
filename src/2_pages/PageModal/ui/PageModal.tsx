import classNames from "classnames";
import style from "./PageModal.module.scss";
import {Title} from "6_shared/ui/Title/Title";
import {Page} from "6_shared/ui/Page/Page";
import {Picture} from "6_shared/ui/Picture/Picture";
import {FormRegular} from "3_widgets/FormRegular/ui/FormRegular";

export const PageModal = () => {
    return (
        <Page type={'regular'}>
            <Title text={'Мы предлагаем регулярные мультимодальные перевозки'} />
            <FormRegular serviceType={'мультимодальные перевозки'}/>
            <Picture preview={'ground'} />
        </Page>
    );
};
