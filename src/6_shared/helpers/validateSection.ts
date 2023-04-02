import {
    validateScheme
} from "6_shared/data/validateSсhemeRegular";

function validateSection(key: number, formData: any): boolean {
    let mode = true;

    // @ts-ignore
    const fields = validateScheme[key];

    for (let i = 0; i < fields.length; i++) {
        if (formData.hasOwnProperty(fields[i])) {
            mode = false;
            break;
        }
    }

    return mode;
}

export {
    validateSection
}
