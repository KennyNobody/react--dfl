import React, {useEffect, useRef, useState} from "react";

import styleTabs from "6_shared/styles/tabs-nav.module.scss";
import "6_shared/styles/datepicker/datepicker.scss";

import classNames from "classnames";
import {Wrapper} from "6_shared/ui/Wrapper/Wrapper";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {FormInterface} from "6_shared/types/FormInterface";
import {registerLocale} from "react-datepicker";
import {useForm, FormProvider} from "react-hook-form";
import {FormUser} from "5_entities/FormUser/FormUser";
import {FormRegularPath} from "5_entities/FormRegularPath/FormRegularPath";
import {validateSection} from "6_shared/helpers/validateSection";
import {Alert} from "6_shared/ui/Alert/Alert";
import {TabItem} from "6_shared/types/FormTabsInerface";
import ru from 'date-fns/locale/ru';
import { FormContext } from "../context/context";
import {FormMiltimodalCargo} from "5_entities/FormMiltimodalCargo/FormMiltimodalCargo";
import {FormRegularCargoAdditional} from "5_entities/FormRegularCargoAdditional/FormRegularCargoAdditional";
import {sendData} from "6_shared/helpers/sendData";

registerLocale('ru', ru);

interface FormProps {
    serviceType: string;
}

export const FormModal = ({serviceType}: FormProps) => {
    const tabPathRef = useRef(null);
    const tabCargoRef = useRef(null);
    const tabUserRef = useRef(null);
    const prevIndexRef = useRef<number>(0);

    const [tabIndex, setTabIndex] = useState<number>(0);
    const [formFullSize, setFormFullSize] = useState<boolean>(false);
    const [alertVisible, setAlertVisible] = useState<boolean>(false);
    const [sectionAdded, setSectionAdded] = useState<boolean>(false);
    const [plugDisabled, setPlugDisabled] = useState<boolean>(false);

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
            tabPathRef?.current?.getAttribute('data-section-name') ||
            tabCargoRef?.current?.getAttribute('data-section-name') ||
            tabUserRef?.current?.getAttribute('data-section-name');

        return !tabName || validateSection(tabName, formMethods.formState.errors);
    }

    const setActiveTab = (index: number) => {
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

    let addSection = (): void => {
        setTabsList((prevTabs: TabItem[]) => [
            ...prevTabs.slice(0, tabsList.length - 1),
            addingSection,
            ...prevTabs.slice(tabsList.length - 1),
        ]);
        setSectionAdded(true);
        setPlugDisabled(false);
        nextSection();
    }

    const nextSection = () => setActiveTab(prevIndexRef.current + 1);

    const showPlug = () => {
        formMethods.trigger().then(() => {
            if (isValidSection()) {
                if (!plugDisabled) setPlugDisabled(true);
                else if (sectionAdded) nextSection();
                else if (!sectionAdded) addSection();
                else console.error('Такого условия нет');
            } else {
                setAlertVisible(true);
            }
        });
    }

    const [tabsList, setTabsList] = useState<TabItem[]>(
        [
            {
                id: 'tabRoute',
                title: 'Маршрут',
                component:
                    <FormRegularPath
                        buttonText={'Далее'}
                        innerRef={tabPathRef}
                    />
            },
            {
                id: 'tabMore',
                title: 'Данные о грузе',
                component:
                    <FormMiltimodalCargo
                        innerRef={tabCargoRef}
                        buttonText={'Далее'}
                    />
            },
            {
                id: 'tabContacts',
                title: 'Контакты',
                component:
                    <FormUser
                        buttonText={'Отправить'}
                        innerRef={tabUserRef}
                    />
            }
        ]
    );

    const addingSection: TabItem = {
        id: 'tabAdditional',
        title: 'Доп. данные',
        component:
            <FormRegularCargoAdditional
                innerRef={tabCargoRef}
                buttonText={'Далее'}
            />
    }

    return (
        <FormProvider {...formMethods}>
            <FormContext.Provider value={{
                plugMode: plugDisabled,
                nextSection,
                showPlug,
                submitData
            }}>
                <Wrapper
                    size={'regular'}
                    isFull={formFullSize}
                >
                    <Tabs
                        className={styleTabs.tabs}
                        selectedTabClassName={styleTabs.tabs__buttonActive}
                        selectedIndex={tabIndex}
                        onSelect={setActiveTab}
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
