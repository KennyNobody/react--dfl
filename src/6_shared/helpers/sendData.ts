import axios, {AxiosResponse} from "axios";

function sendData(data: any) {
    axios.post('/api/v1/service', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response: AxiosResponse) => {
            try {
                // @ts-ignore
                window.showModal('modal-application-complete');
            } catch {
                console.error('Модальное окно не найдено');
            }

            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
}

export {
    sendData
};
