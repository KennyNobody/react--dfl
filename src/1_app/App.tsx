import classNames from "classnames";
import './styles/_index.scss';
import style from './App.module.scss';
import {sectionTitles} from "6_shared/data/sectionTitles";
import {PageTrucking} from "2_pages/PageTrucking";
import React, {useEffect, useState} from "react";
import {PageGroupage} from "2_pages/PageGroupage";
import {ButtonAside} from "6_shared/ui/ButtonAside/ButtonAside";
import {PageAir} from "2_pages/PageAir";
import {PageSea} from "2_pages/PageSea";
import {PageModal} from "2_pages/PageModal";
import {PageStock} from "2_pages/PageStock";
import {PageInsurance} from "2_pages/PageInsurance";
import {PageCustoms} from "2_pages/PageCustoms";
import {Swiper, SwiperSlide} from "swiper/react";

import IconPrev from '6_shared/assets/icons/icon-slider-prev.svg'
import IconNext from '6_shared/assets/icons/icon-slider-next.svg'

import 'swiper/scss';
import 'swiper/scss/navigation';
import {Navigation} from "swiper";
import {SectionInfo} from "3_widgets/SectionInfo";
import {ResponseServiceArticle} from "6_shared/types/ResponseServiceArticle";
import { getData } from "6_shared/requests/services";

interface AppProps {
    className?: string
}

export const App = ({className}: AppProps) => {
    const [data, setData] = useState<ResponseServiceArticle[] | null>([]);
    const [tab, setTab] = useState(0);

    const buttonHandler = (index: number): void => setTab(index);

    useEffect(() => {
        getData(setData);
    }, []);

    return (
        <>
            <div className={classNames(style['app'])}>
                <div className={classNames(style['container'])}>
                    <div className={classNames(style['header'])}>
                        <button className={classNames('slider-button--prev', style['slider-button'], style['slider-button--prev'])}>
                            <IconPrev className={classNames(style['slider-button__icon'])} />
                        </button>
                        <button className={classNames('slider-button--next', style['slider-button'], style['slider-button--next'])}>
                            <IconNext className={classNames(style['slider-button__icon'])} />
                        </button>
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={'auto'}
                            className={classNames(style['container'])}
                            navigation={{
                                nextEl: '.slider-button--next',
                                prevEl: '.slider-button--prev',
                                disabledClass: classNames(style['slider-button--disabled'])
                            }}
                        >
                            {sectionTitles.map((value: string, index: number) => {
                                return <SwiperSlide
                                    className={classNames(style['slide'])}
                                    key={value}
                                >
                                    <ButtonAside caption={value} index={index} isActive={tab===index} setTab={buttonHandler}/>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                    <div className={classNames(style['layout'])}>
                        <aside className={classNames(style['layout__aside'])}>
                            {sectionTitles.map((value: string, index: number) => {
                                return <ButtonAside
                                    key={value}
                                    caption={value}
                                    index={index}
                                    isActive={tab===index}
                                    setTab={buttonHandler}
                                    />
                            })}
                        </aside>
                        <main className={classNames(style['layout__main'])}>
                            {tab === 0 && <PageTrucking />}
                            {tab === 1 && <PageGroupage />}
                            {tab === 2 && <PageAir />}
                            {tab === 3 && <PageSea />}
                            {tab === 4 && <PageModal />}
                            {tab === 5 && <PageStock />}
                            {tab === 6 && <PageInsurance />}
                            {tab === 7 && <PageCustoms />}
                        </main>
                    </div>
                </div>
            </div>

            {data.map((item: ResponseServiceArticle, index: number) => {
                return (<SectionInfo isHidden={tab !== index} data={item} />);
            })}
        </>
    );
};
