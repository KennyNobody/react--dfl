import {Page} from "6_shared/ui/Page/Page";
import {Title} from "6_shared/ui/Title/Title";
import {Picture} from "6_shared/ui/Picture/Picture";
import {FormRegular} from "3_widgets/FormRegular/ui/FormRegular";

export const PageGroupage = () => {
    return (
        <Page type={'regular'}>
            <Title text='Возможна доставка сборных грузов «от двери до двери»'/>
            <FormRegular/>
            <Picture preview={'air'} />
        </Page>
    );
};
