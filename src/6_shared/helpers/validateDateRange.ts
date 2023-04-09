const validateDateRange = (val: any[]) => {
    const start = val[0];
    const end = val[1];

    if (start === null && end === null) return false;

    return true;
};

export {validateDateRange}
