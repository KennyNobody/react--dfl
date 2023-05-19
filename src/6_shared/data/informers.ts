interface Data {
    [key: number]: string;
}

const data: Data = {
    1: '<ul><li>Если загружена спецификация, то необязательно заполнять данные о грузе</li><li>Заявки с загруженной спецификацией проходят обработку в первую очередь</li><li>Вы можете загрузить не более 3 файлов, размером не более 10 мб</li></ul>',
    2: '<ul><li>Примеры документов:<br>Разрешительные документы (лицензии, нотификации, сертификаты и пр.);<br>Коммерческие документы (контракт, инвойс, счет-фактура и пр.);<br>Транспортные документы (накладные, книжки МДП, документы СМR и пр.);<br>Банковские документы;<br>Прочие документы.</li><li>Если загружены документы, то необязательно заполнять данные о грузе</li><li>Если загружены документы, то необязательно заполнять данные о грузе</li><li>Заявки с загруженными документами проходят обработку в первую очередь</li><li>Вы можете загрузить не более 6 файлов, размером не более 20 мб</li></li>'
}

export {
    data
}