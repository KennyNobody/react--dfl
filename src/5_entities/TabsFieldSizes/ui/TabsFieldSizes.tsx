import style from "./TabsFieldSizes.module.scss";
import classNames from "classnames";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Input} from "6_shared/ui/Input/ui/Input";

export const TabsFieldSizes = () => {
    return (
        <div className={classNames(style['wrapper'])}>
            <Tabs
                selectedTabClassName={classNames(style['tab--active'])}
            >
                <TabList className={classNames(style['header'])}>
                    <Tab className={classNames(style['tab'])}>Размер</Tab>
                    <Tab className={classNames(style['tab'])}>Объем</Tab>
                </TabList>

                <TabPanel className={classNames(style['content'])}>
                    <Input
                        isRequired={true}
                        placeholderProp={'Общий объем'}
                        typeProp={'text'}
                        caption={'М³'}
                        name={'cargoVolume'}
                    />
                </TabPanel>
                <TabPanel className={classNames(style['content'])}>
                    <Input
                        isRequired={true}
                        placeholderProp={'Длина'}
                        typeProp={'text'}
                        name={'cargoLength'}
                    />
                    <Input
                        isRequired={true}
                        placeholderProp={'Ширина'}
                        typeProp={'text'}
                        name={'cargoWidth'}
                    />
                    <Input
                        isRequired={true}
                        placeholderProp={'Высота'}
                        typeProp={'text'}
                        caption={'М'}
                        name={'cargoHeight'}
                    />
                </TabPanel>
            </Tabs>
        </div>
    );
};
