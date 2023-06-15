import {Page} from "6_shared/ui/Page/Page";
import {Title} from "6_shared/ui/Title/Title";
import {Picture} from "6_shared/ui/Picture/Picture";
import {FormRegular} from "3_widgets/FormRegular/FormRegular";

interface PageTruckingProps {
    title?: string;
}

export const PageTrucking = ({title}: PageTruckingProps) => {
    return (
        <Page type={'regular'}>
            <Title text={title}/>
            <FormRegular
                formType={'regular'}
                serviceTitle={1}
            />
            <Picture preview={'ground'}/>
        </Page>
    );
};
