import axios, {AxiosResponse} from "axios";

function getPlaceIndex(lat: string, lon: string, method: any, key: string) {
    axios.get('https://nominatim.openstreetmap.org/reverse', {
        params: {
            lat,
            lon,
            format: 'json',
        }
    })
        .then((response) => {
            try {
                const postcode = response.data.address.postcode;
                method(key, postcode);
            } catch {
                console.error('Ошибка определения почтового индекса');
            }
        })
        .catch((error) => {
            console.error(error);
        })
}

export {
    getPlaceIndex
}
