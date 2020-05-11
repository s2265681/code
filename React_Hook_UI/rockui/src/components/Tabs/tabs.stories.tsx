import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from "./tabs";
import TabItem from "./tabsItem";

const Tab =()=>(
  <Tabs defaultIndex={0} onSelect={(index)=>console.log(index)}>
  <TabItem label="选项卡一">this is tab1</TabItem>
  <TabItem label="选项卡二" disabled>this is tab2</TabItem>
  <TabItem label="选项卡三">this is tab3</TabItem>
</Tabs>
)


storiesOf('Tab Component',module)

.add('Tab',Tab)
