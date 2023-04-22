import {Title} from "6_shared/ui/Title/Title";
import {Page} from "6_shared/ui/Page/Page";
import {Picture} from "6_shared/ui/Picture/Picture";
import {FormRegular} from "3_widgets/FormRegular/ui/FormRegular";

export const PageAir = () => {
    return (
        <Page type={'regular'}>
            <Title text={'Мы предлагаем регулярные грузовые авиаперевозки'} />
            <FormRegular
                formType={'regular'}
                serviceTitle={3}
            />
            <Picture preview={'air'} />
        </Page>
    );
};
