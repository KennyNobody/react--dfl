import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {FormContext} from "3_widgets/FormRegular/context/context";
import styleTabs from "6_shared/styles/tabs-nav.module.scss";

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
import {sendData} from "6_shared/helpers/sendData";
import {getMapsData} from "6_shared/helpers/getMapsData";
import {PlaceInterface} from "6_shared/types/PlaceInterface";
import {revertData} from "6_shared/helpers/revertData";
import {getPlaceIndex} from "6_shared/helpers/getPlaceIndex";
const debounce = require('lodash.debounce');

type FormType = 'regular' | 'modal' | 'groupage';

interface FormProps {
    serviceTitle: string;
    formType: FormType;
}

export const FormRegular = ({serviceTitle, formType}: FormProps) => {
    const tabPathRef = useRef(null);
    const tabCargoRef = useRef(null);
    const tabCargoAdditionalRef = useRef(null);
    const tabUserRef = useRef(null);
    const prevIndexRef = useRef<number>(0);

    const [tabIndex, setTabIndex] = useState<number>(0);
    const [itemsList, setItemsList] = useState<number>(1);
    const [formFullSize, setFormFullSize] = useState<boolean>(false);
    const [alertVisible, setAlertVisible] = useState<boolean>(false);
    const [sectionAdded, setSectionAdded] = useState<boolean>(false);
    const [plugDisabled, setPlugDisabled] = useState<boolean>(false);
    const [isMultiItems, setIsMultiItems] = useState<boolean>(formType === 'groupage');

    const [placesList, setPlacesList] = useState<[]>([]);

    const formMethods = useForm<FormInterface>({
        mode: "onChange",
        shouldUnregister: false,
        defaultValues: {
            'date': [null, null]
        }
    });

    if (formType !== 'groupage') {
        // @ts-ignore
        const checkboxValue = formMethods.watch('isGroupage', false);

        useEffect(() => {
            setIsMultiItems(!checkboxValue);
        }, [checkboxValue]);
    }


    useEffect(() => {
        prevIndexRef.current = tabIndex;

        if (tabIndex !== 0) setFormFullSize(true);
        else setFormFullSize(false);

        setAlertVisible(false);
    }, [tabIndex]);

    const updatePlacesList = (val: string, type: 'from' | 'to') => {
        const data = formMethods.getValues(type === 'from' ? 'fromCountry' : 'toCountry');

        if (data && val.length > 2) {
            getMapsData(data.value, val)
                .then((response: PlaceInterface[]) => {
                    // @ts-ignore
                    setPlacesList(response);
                })
        } else {
            setPlacesList([]);
        }
    }

    const debouncedUpdatePlacesList = useMemo(() => debounce(updatePlacesList, 1000), []);

    useEffect(() => {
        return () => {
            debouncedUpdatePlacesList.cancel();
        }
    }, []);

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
            if (isValidSection()) {
                const data = formMethods.getValues();
                data['serviceName'] = serviceTitle;
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

    const revertPlaces = () => {
        revertData(formMethods);
    }

    const toValue = formMethods.watch('toCity');
    const fromValue = formMethods.watch('fromCity');

    useEffect(() => {
        const data = formMethods.getValues('toCity');

        console.log(data);

        if (data) {
            const {lat, lon} = data;

            getPlaceIndex(lat, lon, formMethods.setValue, 'postcodeTo');
        }
    }, [toValue]);

    useEffect(() => {
        const data = formMethods.getValues('fromCity');

        if (data) {
            const {lat, lon} = data;

            getPlaceIndex(lat, lon, formMethods.setValue, 'postcodeFrom');
        }
    }, [fromValue]);

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
                    formType,
                    plugMode: plugDisabled,
                    nextSection,
                    showPlug,
                    submitData,
                    addItem,
                    debouncedUpdatePlacesList,
                    revertPlaces,
                    isMultiItems,
                    itemsList,
                    placesList
                }}
            >
                <Wrapper
                    size={'regular'}
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
