import React from 'react'
import Page2 from '../page2'
import { HashRouter as Router , Route, Link } from "react-router-dom";
import './index.less'
import { Button,Alert,Icon,Menu,Tabs } from 'rockui';

const { MenuItem , SubMenu} = Menu;
const { TabItem } = Tabs;

interface Props{

}
const Home:React.FC<Props>=(props)=> {
    return (
        <div className="home_wrapper">
             首页
             <br/>
             <h3>使用rockui组件测试</h3>
             <Button btnType="primary" size="lg">rockui!!</Button><br/>
             <Alert  message="Alert Success" /><br/>
             <Icon icon='coffee' theme="warning" size="2x"/><br/>
             {/**
             <Menu defaultIndex={'0'} onSelect={(index) => console.log(index)}>
                <MenuItem>项目1</MenuItem>
                <MenuItem>项目2</MenuItem>
                <MenuItem disabled>项目3</MenuItem>
                <SubMenu title="dropdown">
                    <MenuItem>dropdown1</MenuItem>
                    <MenuItem>dropdown2</MenuItem>
                    <MenuItem>dropdown3</MenuItem>
                </SubMenu>
            </Menu>
            <br/>
                <Tabs defaultIndex={0} onSelect={(index)=>console.log(index)}>
                <TabItem label="选项卡一">this is tab1</TabItem>
                <TabItem label="选项卡二" disabled>this is tab2</TabItem>
                <TabItem label="选项卡三">this is tab3</TabItem>
          </Tabs>
        */}
        </div>
    )
}

export default Home;