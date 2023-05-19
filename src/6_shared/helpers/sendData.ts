import axios, {AxiosResponse} from "axios";

function sendData(data: any) {

    const formData = new FormData();
    formData.append('data', JSON.stringify(data));

    const keys = Object.keys(data);
    let fileCounter = 0;

    keys.forEach(key => {
        if (key.includes("file-")) {
            formData.append(`file-${fileCounter}`, data[key]);
            fileCounter++;
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
