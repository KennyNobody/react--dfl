function fixDateError(date: Date) {
    date.setHours((-1 * date.getTimezoneOffset()) / 60);
    return date;
}

export {
    fixDateError
}
