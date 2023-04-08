import {Title} from "6_shared/ui/Title/Title";
import {Page} from "6_shared/ui/Page/Page";
import {Picture} from "6_shared/ui/Picture/Picture";
import {FormCustoms} from "3_widgets/FormCustoms/FormCustom";

export const PageCustoms = () => {
    return (
        <Page type={'customs'}>
            <Title text={'Проверим на нетарифные меры и рассчитаем таможенные платежи'} />
            <FormCustoms serviceTitle={'таможенное оформление'}/>
            <Picture preview={'ground'} />
        </Page>
    );
};
