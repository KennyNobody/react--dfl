import classNames from "classnames";
import style from "./PageGroupage.module.scss";
import {Page} from "6_shared/ui/Page/Page";
import {Title} from "6_shared/ui/Title/Title";
import {Picture} from "6_shared/ui/Picture/Picture";
import {Wrapper} from "6_shared/ui/Wrapper/Wrapper";

export const PageGroupage = () => {
    return (
        <Page type={'regular'}>
            <Title text='Возможна доставка сборных грузов «от двери до двери»'/>
            <Picture preview={'air'} />
        </Page>
    );
};
