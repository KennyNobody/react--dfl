interface PlaceItemInterface {
    lon: any;
    lat: any;
    id: number,
    label: string,
    value: string
}

interface FormInterface {
    serviceName?: string;
    fromCountry?: PlaceItemInterface;
    fromCity?: PlaceItemInterface;
    toCountry?: PlaceItemInterface;
    toCity?: PlaceItemInterface;
    date?: [Date | null, Date | null];

    neededFullVolume?: boolean;

    cargoName?: string;
    cargoWeight?: string;
    cargoLength?: number;
    cargoWidth?: number;
    cargoHeight?: number;
    cargoVolume?: string;
    cargoPrice?: string;
    quantityPlaces?: string;
    customsvalue?: string;
    fullName?: string;
    transportType?: string;
    cargoCaption? :string;

    organization?: string;
    phoneNumber?: string;
    email?: string;
    website?: string;
    INN?: number;
}

export {
    PlaceItemInterface,
    FormInterface
};
