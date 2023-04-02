const validateScheme = {
    // Multimodal
    'pathRegular': [
        'fromCountry',
        'fromCity',
        'toCountry',
        'toCity',
        'date'
    ],
    'cargoMultimodal': [
        'needFullTransport',
        'groupageCargo',
        'cargoName',
        'cargoWeight',
        'cargoVolume',
        'cargoPrice',
        'quantityPlaces',
        'customsCode',
        'fullName',
        'transportType',
        'cargoCaption',
        'cargoLength',
        'cargoWidth',
        'cargoHeight',
        'cargoDescription'
    ],
    'userRegular': [
        'organization',
        'phoneNumber',
        'email',
        'website',
        'INN'
    ],
    // Хранение
    'stockMain': [
        'cargoName',
        'cargoWeight',
        'cargoLength',
        'cargoWidth',
        'cargoHeight',
    ],
    // Хранение "О грузе"
    'cargoStock': [
        'skuPositionQuantity',
        'averagePositionQuantity',
        'averageSendingQuantity',
        'averageArrivalQuantity',
        'balancePerMonthVolume',
        'balancePerMonthQuantity',
        'averageReceiptMonthVolume',
        'averageReceiptMonthQuantity',
        'averageShipmentVolume',
        'averageShipmentQuantity',
        'cargoDescription'
    ],
    // Таможенное оформление
    'pathCustom': [
        'fromCountry',
        'fromCity',
        'toCountry',
        'toCity',
    ],
    'customCargo': [
        'customsType',
        'cargoName',
        'codesList',
        'cargoFromCountry',
        'quantityPlaces',
        'netWeight',
        'grossWeight',
        'certificates',
        'invoicePrice',
        'cargoDescription',
        'isFile'
    ],
    'cargoCustomAdditional': [
        'terminal',
        'quantityShipsYear',
        'wishes'
    ],
    // cargo multimodal
    'cargoRegular': [
        'maxLength',
        'maxWidth',
        'maxHeight',
        'additionalServices',
        'shipmentsPerYear',
        'hazardClass',
        'unNumber',
        'cargoVolume',
        'cargoLength',
        'cargoWidth',
        'cargoHeight',
        'wishes',
        'pastExperience',
        'cargoDescription',
        'pastExperience',
        'deliveriesAlreadyBeen',
        'items'
    ],
    'cargoRegularAdditional': [

    ],
    'item': [
        'name',
        'weight',
        'volume',
        'services',
        'length',
        'width',
        'height',
        'price',
        'places',
        'code',
        'caption'
    ]
}

export {
    validateScheme
}
