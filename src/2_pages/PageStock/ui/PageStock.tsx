import style from "./PageStock.module.scss";
import {Title} from "6_shared/ui/Title/Title";
import {Page} from "6_shared/ui/Page/Page";
import {Picture} from "6_shared/ui/Picture/Picture";
import {FormStock} from "3_widgets/FormStock/FormStock";

export const PageStock = () => {
    return (
        <Page type={'stock'}>
            <Title text={'Хранение и обработка грузов с учетом номенклатуры'} />
            <FormStock serviceTitle={6}/>
            <Picture preview={'stock'} />
        </Page>
    );
};
