import styles from "./FileUploader.module.scss";
import classNames from "classnames";
import IconFile from "6_shared/assets/icons/icon-file.svg";
import IconAccent from "6_shared/assets/icons/icon-accent.svg";
import React, {useState} from "react";
import {useFormContext} from "react-hook-form";

interface FileUploaderProps {
    name: string
}

interface FormData {
    file: FileList;
}

export const FileUploader = ({name}: FileUploaderProps) => {
    const { register, formState: {errors}, setValue } = useFormContext();

    const [filename, setFilename] = useState<string>('Прикрепить спецификацию');

    const changeInputField = (el: HTMLInputElement) => setFilename(el.files[0].name);
    const setFile = (file: File) => {
        setValue(name, file);
    }

    return (
        <label className={classNames(styles['wrapper'])}>
            <input
                className={classNames(styles['input'])}
                type="file"
                name={name}
                {...register(name, { required: false })}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    changeInputField(e.target);
                    setFile(e.target.files[0])
                }}/>
            <IconFile className={classNames(styles['iconFile'])} />
            <p className={classNames(styles['caption'])}>
                {filename}
            </p>
            <IconAccent  className={classNames(styles['iconAccent'])} />
        </label>
    );
};
