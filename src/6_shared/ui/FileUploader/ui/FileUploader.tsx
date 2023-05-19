import styles from "./FileUploader.module.scss";
import classNames from "classnames";
import IconFile from "6_shared/assets/icons/icon-file.svg";
import React, {useState, useEffect, useContext} from "react";
import {useFormContext} from "react-hook-form";
import {calcFilesSize} from "6_shared/helpers/calcFilesSize";

interface FileUploaderProps {
    name: string;
    context: any;
    maxSize: number;
}

interface FormData {
    file: FileList;
}

interface FileItem {
    index: number;
    title: string;
}

export const FileUploader = ({ name, context, maxSize }: FileUploaderProps) => {
    const { register, formState: { errors }, setValue } = useFormContext();

    const [fileList, setFileList] = useState<File[]>([]);

    const setFiles = (newList: FileList | null) => {
        const arr = Array.from(newList);

        if (!calcFilesSize([...fileList, ...arr], maxSize)) {
            context.setAlertVisible(2);
            return false;
        } else {
            setFileList((prevFileList:File[]) => [...prevFileList, ...arr]);
        }
    };

    const removeItem = (index: number, event: React.MouseEvent) => {
        event.preventDefault();
        const newFiles = [...fileList];
        newFiles.splice(index, 1);
        setFileList(newFiles);
    }

    useEffect(() => {
        fileList.map((item, index) => {
            setValue(`file-${index}`, item);
        });
    }, [fileList]);

    return (
        <label className={classNames(styles['wrapper'])}>
            <input
                className={classNames(styles['input'])}
                type="file"
                name={name}
                multiple
                {...register(name, { required: false })}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFiles(e.target.files);
                }}
            />
            <IconFile className={classNames(styles['iconFile'])} />

            <ul className={styles.list}>
                {fileList.length === 0 && <li className={classNames(styles.item)}>
                    Прикрепить файлы
                </li> }
                {fileList.length > 0 &&
                    fileList.map((item, index) => (
                        <li
                            key={index}
                            onClick={(e) => removeItem(index, e)}
                            className={classNames(styles.item)}
                        >
                            {item.name}
                        </li>
                    ))}
            </ul>
        </label>
    );
};
