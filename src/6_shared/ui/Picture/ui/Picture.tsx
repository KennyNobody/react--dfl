import styles from "./Picture.module.scss";
import classNames from "classnames";
// import pictureGround from "6_shared/assets/images/picture-ground.svg"

type PictureType = 'ground' | 'air' | 'sea' | 'stock';

interface PictureProps {
    preview: PictureType
}

export const Picture = ({preview}: PictureProps) => {
    return (
        <div className={classNames(styles.block, [styles[`block--${preview}`]])}></div>
    );
};
