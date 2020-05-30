import React from 'react'
import Page2 from '../page2'
import { HashRouter as Router , Route, Link } from "react-router-dom";
import './index.less'
import { Button,Alert,Icon,Menu,Tabs, Spider } from 'rockui';

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
          <Spider   
                autoplay={false}
                initIdx={0}
                deployTime={3000} 
                height={400}
                >
                <img src="http://img3.imgtn.bdimg.com/it/u=1553709961,3652782060&fm=26&gp=0.jpg" alt="图一"/>
                <img src="http://img4.imgtn.bdimg.com/it/u=3471735586,1899139408&fm=26&gp=0.jpg" alt="图二"/>
                <img src="http://img2.imgtn.bdimg.com/it/u=1303806583,1572175195&fm=26&gp=0.jpg" alt="图三"/>
            </Spider>
        </div>
    )
}

export default Home;