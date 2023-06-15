function getServiceParam (setter: Function) {
    const parsedUrl = new URL(window.location.href);
    const id = parsedUrl.searchParams.get("service");

    if (id) setter(Number(id));
}

export {
    getServiceParam
}
