import axios, {AxiosResponse} from "axios";

function getPlaceIndex(lat: string, lon: string, method: any, key1: string, key2: string) {
    axios.get('https://nominatim.openstreetmap.org/reverse', {
        params: {
            lat,
            lon,
            format: 'json',
        }
    })
        .then((response: AxiosResponse) => {
            let city;

            try {
                const postcode = response.data.address.postcode;
                method(key1, postcode);
            } catch {
                console.error('Ошибка определения почтового индекса');
            }

            try {
                const city = response.data.address.city;
                method(key2, city);
            } catch {
                console.error('Ошибка определения города');
            }

            if (city) {
                try {
                    const city = Object.keys(response.data.address)[0];
                    method(key2, city);
                } catch {
                    console.error('Ошибка определения населенного пункта');
                }
            }

        })
        .catch((error) => {
            console.error(error);
        })
}

export {
    getPlaceIndex
}
