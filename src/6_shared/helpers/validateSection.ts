import {
    validateScheme
} from "6_shared/data/validateSсhemeRegular";

function validateSection(key: number, formData: any): boolean {
    let mode = true;

    // @ts-ignore
    const fields = validateScheme[key];

    for (let i = 0; i < fields.length; i++) {
        console.log(fields[i]);

        if (formData.hasOwnProperty(fields[i])) {
            if (fields[i] === 'date' && fields[i][0] === null && fields[i][1] === null) {
                mode = false;
                break;
            }


            if (fields[i] === 'items') {
                const itemScheme = validateScheme['item'];


                try {
                    if (formData.items[0].hasOwnProperty(itemScheme[i])) {
                        mode = false;
                        break;
                    }
                } catch {/**/}

            }

            mode = false;
            break;
        }
    }

    return mode;
}

export {
    validateSection
}
