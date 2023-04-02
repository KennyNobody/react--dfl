interface PlaceItemInterface {
    id: number,
    label: string,
    value: string
}

interface FormInterface {
    fromCountry?: PlaceItemInterface;
    fromCity?: PlaceItemInterface;
    toCountry?: PlaceItemInterface;
    toCity?: PlaceItemInterface;
    date?: string;

    needFullTransport?: boolean;

    cargoName?: string;
    cargoWeight?: string;
    cargoLength?: number;
    cargoWidth?: number;
    cargoHeight?: number;
    cargoVolume?: string;
    cargoPrice?: string;
    quantityPlaces?: string;
    customsCode?: string;
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
