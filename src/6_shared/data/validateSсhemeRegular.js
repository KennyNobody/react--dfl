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
        'customsvalue',
        'fullName',
        'transportType',
        'cargoCaption',
        'cargoLength',
        'cargoWidth',
        'cargoHeight',
        'cargoDescription',
        'customsCodes'
    ],
    'userRegular': [
        'fullName',
        'organization',
        'phoneNumber',
        'email',
        'website',
        'INN',
        'privacyAgreement'
    ],
    // Хранение
    'stockMain': [
        'name',
        'caption',
        'skuPositionQuantity',
        'averageArrivalQuantity',
        'averageSendingQuantity',
        'averagePositionQuantity',
    ],
    // Хранение "О грузе"
    'cargoStock': [
        'balancePerMonthVolume',
        'balancePerMonthQuantity',
        'averageReceiptMonthVolume',
        'averageReceiptMonthQuantity',
        'averageShipmentVolume',
        'averageShipmentQuantity',
        'cargoDescription',
    ],
    // Таможенное оформление
    'pathCustom': [
        'fromCountry',
        'fromCity',
        'toCountry',
        'toCity',
    ],
    'customCargo':  [
        // 'customsType',
        // 'cargoName',
        'valuesList',
        'cargoFromCountry',
        'quantityPlaces',
        'netWeight',
        'grossWeight',
        // 'certificates',
        'invoicePrice',
        'cargoDescription',
        'isFile',
        'deliveryCondition',
        'procedure'
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
        'items',
        'transportType'
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
        'value',
        'caption'
    ]
}

export {
    validateScheme
}
