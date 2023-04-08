function revertData(methods: any) {
    const newToCountry = {...methods.getValues('fromCountry')};
    const newToCity = {...methods.getValues('fromCity')};

    const newFromCountry = {...methods.getValues('toCountry')};
    const newFromCity = {...methods.getValues('toCity')};

    methods.setValue('toCountry', null);
    methods.setValue('toCity', null)
    methods.setValue('fromCountry', null)
    methods.setValue('fromCity', null)

    if (isObjectNotEmpty(newToCountry)) {
        methods.setValue('toCountry', newToCountry);
    }

    if (isObjectNotEmpty(newToCity)) {
        methods.setValue('toCity', newToCity);
    }

    if (isObjectNotEmpty(newFromCountry)) {
        methods.setValue('fromCountry', newFromCountry);
    }

    if (isObjectNotEmpty(newFromCity)) {
        methods.setValue('fromCity', newFromCity);
    }
}

function isObjectNotEmpty(obj: any) {
    return Object.keys(obj).length > 0;
}

export {
    revertData
}
