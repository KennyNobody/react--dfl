import {useEffect, useRef, useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {FormContext} from "3_widgets/FormRegular/context/context";
import styles from "./FormRegular.module.scss";
import classNames from "classnames";

import {FormInterface} from "6_shared/types/FormInterface";
import {TabItem} from "6_shared/types/FormTabsInerface";

import {useForm, FormProvider} from "react-hook-form";
import {Wrapper} from "6_shared/ui/Wrapper/Wrapper";
import {Alert} from "6_shared/ui/Alert/Alert";
import {validateSection} from "6_shared/helpers/validateSection";
import {FormUser} from "5_entities/FormUser/FormUser";
import {FormRegularPath} from "5_entities/FormRegularPath/FormRegularPath";
import {FormRegularCargoAdditional} from "5_entities/FormRegularCargoAdditional/FormRegularCargoAdditional";
import {FormRegularCargo} from "5_entities/FormRegularCargo/FormRegularCargo";

export const FormRegular = () => {
    const tabPathRef = useRef(null);
    const tabCargoRef = useRef(null);
    const tabCargoAdditionalRef = useRef(null);
    const tabUserRef = useRef(null);
    const prevIndexRef = useRef<number>(0);

    const [tabIndex, setTabIndex] = useState<number>(0);
    const [formFullSize, setFormFullSize] = useState<boolean>(false);
    const [alertVisible, setAlertVisible] = useState<boolean>(false);
    const [sectionAdded, setSectionAdded] = useState<boolean>(false);
    const [plugDisabled, setPlugDisabled] = useState<boolean>(false);
    const [itemsList, setItemsList] = useState<number>(1);

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
            tabCargoAdditionalRef?.current?.getAttribute('data-section-name') ||
            tabUserRef?.current?.getAttribute('data-section-name');

        return !tabName || validateSection(tabName, formMethods.formState.errors);
    }

    const addItem = () => {
        setItemsList(itemsList + 1);
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
            if (isValidSection()) alert('Отправляем форму');
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
                        innerRef={tabPathRef}
                        buttonText={'Далее'}
                    />
            },
            {
                id: 'tabMore',
                title: 'Данные о грузе',
                component:
                    <FormRegularCargo
                        innerRef={tabCargoRef}
                        buttonText={'Далее'}
                    />
            },
            {
                id: 'tabContacts',
                title: 'Контакты',
                component:
                    <FormUser
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
            <FormRegularCargoAdditional
                innerRef={tabCargoAdditionalRef}
                buttonText={'Далее'}
            />
    }

    return (
        <FormProvider {...formMethods}>
            <FormContext.Provider
                value={{
                    plugMode: plugDisabled,
                    nextSection,
                    showPlug,
                    submitData,
                    addItem,
                    itemsList
                }}
            >
                <Wrapper
                    size={'regular'}
                    isFull={formFullSize}
                >
                    <Tabs
                        onSelect={setActiveTab}
                        selectedIndex={tabIndex}
                        className={styles['tabs']}
                        selectedTabClassName={styles['tabs__buttonActive']}
                    >
                        <TabList className={styles['tabs__toolbar']}>
                            {tabsList.map((tab: TabItem) => (
                                <Tab
                                    key={tab.id}
                                    className={styles['tabs__button']}
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
