import {useEffect, useRef, useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {FormContext} from "3_widgets/FormStock/context/context";
import styleTabs from "6_shared/styles/tabs-nav.module.scss";
import classNames from "classnames";

import {FormInterface} from "6_shared/types/FormInterface";
import {TabItem} from "6_shared/types/FormTabsInerface";

import {useForm, FormProvider} from "react-hook-form";
import {Wrapper} from "6_shared/ui/Wrapper/Wrapper";
import {Alert} from "6_shared/ui/Alert/Alert";
import {validateSection} from "6_shared/helpers/validateSection";

import {FormStockUser} from "5_entities/FormStockUser/FormStockUser";
import {FormStockMain} from "5_entities/FormStockMain/FormStockMain";
import {FormStockCargo} from "5_entities/FormStockCargo/FormStockCargo";
import {sendData} from "6_shared/helpers/sendData";

interface FormProps {
    serviceType: string;
}

export const FormStock = ({serviceType}: FormProps) => {
    const tabMainRef = useRef(null);
    const tabCargoRef = useRef(null);
    const tabUserRef = useRef(null);
    const prevIndexRef = useRef<number>(0);

    const [tabIndex, setTabIndex] = useState<number>(0);
    const [formFullSize, setFormFullSize] = useState<boolean>(false);
    const [alertVisible, setAlertVisible] = useState<boolean>(false);

    const formMethods = useForm<FormInterface>({
        mode: "onChange",
        shouldUnregister: false
    });

    useEffect(() => {
        prevIndexRef.current = tabIndex;

        if (tabIndex !== 0) setFormFullSize(true);
        else setFormFullSize(false);

        setAlertVisible(false);
    }, [tabIndex]);

    const closeModal = (): void => setAlertVisible(false);

    const isValidSection = (): boolean => {
        const tabName =
            tabMainRef?.current?.getAttribute('data-section-name') ||
            tabCargoRef?.current?.getAttribute('data-section-name') ||
            tabUserRef?.current?.getAttribute('data-section-name');

        return !tabName || validateSection(tabName, formMethods.formState.errors);
    }

    const setActiveTab = (index: number) => {
        // TODO Разобраться, почему не работает валидация для пользователя
        if (index > tabsList.length) return false;
        if (index < prevIndexRef.current) {
            if (index !== 0) setFormFullSize(true);
            else setFormFullSize(false);
            setAlertVisible(false);
            setTabIndex(index);
        } else {
            formMethods.trigger().then(() => {
                if (isValidSection()) setTabIndex(index);
                else setAlertVisible(true);
            });
        }
    }

    const nextSection = () => setActiveTab(prevIndexRef.current + 1);

    const submitData = () => {
        formMethods.trigger().then(() => {
            if (isValidSection()) {
                const data = formMethods.getValues();
                data['serviceName'] = serviceType;
                sendData(data);
            }
            else setAlertVisible(true);
        });
    }

    const [tabsList, setTabsList] = useState<TabItem[]>(
        [
            {
                id: 'tabMain',
                title: 'Основная информация',
                component:
                    <FormStockMain
                        innerRef={tabMainRef}
                        buttonText={'Далее'}
                    />
            },
            {
                id: 'tabCargo',
                title: 'Данные о грузе',
                component:
                    <FormStockCargo
                        innerRef={tabCargoRef}
                        buttonText={'Далее'}
                    />
            },
            {
                id: 'tabInfo',
                title: 'Контакты',
                component:
                    <FormStockUser
                        innerRef={tabUserRef}
                        buttonText={'Отправить'}
                    />
            }
        ]
    );

    return (
        <FormProvider {...formMethods}>
            <FormContext.Provider
                value={{
                    nextSection,
                    submitData
                }}
            >
                <Wrapper
                    size={'stock'}
                    isFull={formFullSize}
                >
                    <Tabs
                        onSelect={setActiveTab}
                        selectedIndex={tabIndex}
                        className={styleTabs['tabs']}
                        selectedTabClassName={styleTabs['tabs__buttonActive']}
                    >
                        <TabList className={styleTabs['tabs__toolbar']}>
                            {tabsList.map((tab: TabItem) => (
                                <Tab
                                    key={tab.id}
                                    className={styleTabs['tabs__button']}
                                >{tab.title}</Tab>
                            ))}
                        </TabList>

                        {tabsList.map((tab: TabItem) => (
                            <TabPanel key={tab.id}>
                                { tab.component }
                            </TabPanel>
                        ))}
                    </Tabs>

                    {alertVisible && <Alert closeModal={closeModal}/>}
                </Wrapper>
            </FormContext.Provider>
        </FormProvider>
    );
};
