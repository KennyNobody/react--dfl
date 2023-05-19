function calcFilesSize(arr: File[], max: number) {
    const list = Array.from(arr);
    let size = 0;

    list.forEach(item => {
       size = size + item.size;
    });

    const result = size / 1024 / 1024;
    return (result < 10);
}

export {
    calcFilesSize
}
