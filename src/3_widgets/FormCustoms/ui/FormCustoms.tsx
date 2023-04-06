import {useEffect, useRef, useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import { FormContext } from "../context/context";
import styleTabs from "6_shared/styles/tabs-nav.module.scss";
import classNames from "classnames";

import {FormInterface} from "6_shared/types/FormInterface";
import {TabItem} from "6_shared/types/FormTabsInerface";

import {useForm, FormProvider} from "react-hook-form";
import {Wrapper} from "6_shared/ui/Wrapper/Wrapper";
import {Alert} from "6_shared/ui/Alert/Alert";
import {validateSection} from "6_shared/helpers/validateSection";
import {registerLocale} from "react-datepicker";
import {FormCustomsCargoAdditional} from "5_entities/FormCustomsCargoAdditional/FormCustomsCargoAdditional";
import {FormCustomsUser} from "5_entities/FormCustomsUser/FormCustomsUser";
import {FormCustomsPath} from "5_entities/FormCustomsPath/FormCustomsPath";

import ru from 'date-fns/locale/ru';
import {FormCustomsCargo} from "5_entities/FormCustomsCargo/FormCustomsCargo";
import {sendData} from "6_shared/helpers/sendData";
registerLocale('ru', ru);

interface FormProps {
    serviceType: string;
}

export const FormCustoms = ({serviceType}: FormProps) => {
    const tabPathRef = useRef(null);
    const tabCargoRef = useRef(null);
    const tabCargoRefAdditional = useRef(null);
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
            tabCargoRefAdditional?.current?.getAttribute('data-section-name') ||
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
                    <FormCustomsPath
                        innerRef={tabPathRef}
                        buttonText={'Далее'}
                    />
            },
            {
                id: 'tabMore',
                title: 'Данные о грузе',
                component:
                    <FormCustomsCargo
                        innerRef={tabCargoRef}
                        buttonText={'Далее'}
                    />
            },
            {
                id: 'tabContacts',
                title: 'Контакты',
                component:
                    <FormCustomsUser
                        innerRef={tabUserRef}
                        buttonText={'Отправить'}
                    />
            }
        ]
    );

    const addingSection: TabItem = {
        id: 'tabAdditional',
        title: 'Доп. данные',
        component:
            <FormCustomsCargoAdditional
                innerRef={tabCargoRefAdditional}
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
                    size={'customs'}
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
