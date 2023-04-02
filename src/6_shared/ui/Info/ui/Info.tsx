import style from "./Info.module.scss";
import classNames from "classnames";
import {ArticleInfo} from "6_shared/ui/ArticleInfo/ArticleInfo";
import {FormInterface} from "6_shared/types/FormInterface";

interface InfoProps {
    data?: FormInterface
}

export const Info = ({data}: InfoProps) => {
    const {
        cargoName,
        cargoWeight,
        cargoVolume,
        cargoPrice,
        quantityPlaces,
        customsCode,
        transportType,
        cargoCaption
    } = data;

    console.log(data);

    return (
        <div className={classNames(style['info'])}>
            {cargoName && cargoName.length > 0 &&
                <ArticleInfo title={'Название'} text={cargoName} size={'small'}/>
            }
            {cargoWeight && cargoWeight.length > 0 &&
                <ArticleInfo title={'Вес'} text={`${cargoWeight}  кг`} size={'small'}/>
            }
            {cargoVolume && cargoVolume.length > 0 &&
                <ArticleInfo title={'Объем'} text={`${cargoVolume}  м³`} size={'small'}/>
            }
            {cargoPrice && cargoPrice.length > 0 &&
                <ArticleInfo title={'Оценочная стоимость груза'} text={`${cargoPrice}  ₽`} size={'small'}/>
            }
            {quantityPlaces && quantityPlaces.length > 0 &&
                <ArticleInfo title={'Количество грузовых мест'} text={quantityPlaces} size={'small'}/>
            }
            {customsCode && customsCode.length > 0 &&
                <ArticleInfo title={'Таможенный код (6 симв.)'} text={customsCode} size={'small'}/>
            }
            {transportType && transportType.length > 0 &&
                <ArticleInfo title={'Требуемый тип ТС'} text={transportType} size={'small'}/>
            }
            {cargoCaption && cargoCaption.length > 0 &&
                <ArticleInfo title={'cargoCaption'} text={cargoCaption} size={'full'}/>
            }
        </div>
    );
};
