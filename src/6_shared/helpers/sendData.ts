import axios, {AxiosResponse} from "axios";

function sendData(data: any) {

    const formData = new FormData();
    formData.append('data', JSON.stringify(data));

    const keys = Object.keys(data);

    keys.forEach(key => {
        if (key.includes("isFile")) {
            console.log(data[key]);
            formData.append(key, data[key]);
        }
    });

    axios.post('/api/v1/service/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
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
