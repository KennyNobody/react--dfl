import axios, {AxiosResponse} from "axios";
import {PlaceInterface} from "6_shared/types/PlaceInterface";

async function getMapsData(countryCode: string, str: string) {
    try {
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
                q: str,
                format: 'json',
                addressdetails: 0,
                countrycodes: countryCode
            }
        });

        return convertArray(response.data);
    } catch (error) {
        console.error(error);
    }
}

function convertArray(arr: []) {
    const newArr: PlaceInterface[] = [];

    arr.forEach(item => {
        newArr.push({
            id: item['osm_id'],
            label: item['display_name'],
            value: item['display_name']
        });
    })

    return newArr;
}

export {
    getMapsData
}
