import axios, {AxiosResponse} from "axios";
import { ResponseServiceArticle } from "6_shared/types/ResponseServiceArticle";

function getData(setter: Function) {
    const url = 'https://www.dflru.com/api/v1/services/';

    axios.get<ResponseServiceArticle[]>(url).then((response: AxiosResponse) => {
        console.log(response.data);
        setter(response.data);
    });
}

export {
    getData
}
