import { FC } from 'react';
import { TabsProps } from './tabs';
import { TabsItemProps } from './tabsItem';
export declare type ITabsComponent = FC<TabsProps> & {
    TabsItem: FC<TabsItemProps>;
};
declare const TransTabs: ITabsComponent;
export default TransTabs;
