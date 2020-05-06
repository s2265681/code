import React from "react";
import "./App.css";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import TabItem from "./components/Tabs/tabsItem";
import Tabs from "./components/Tabs/tabs";
import Icon from './components/Icon/icon'


// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Button组件</h2>
        <div className="block buttons">
          <Button
            size={ButtonSize.Small}
            autoFocus
            onClick={(e) => {
              e.preventDefault();
              // alert("123");
            }}
            className="tok"
          >
            hello
          </Button>
          <Button btnType={ButtonType.Primary}>Primary</Button>
          <Button btnType={ButtonType.Dashed}>Dashed</Button>
          <Button btnType={ButtonType.Default} size={ButtonSize.Large}>
            Default
          </Button>
          <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
            Danger
          </Button>
          <Button
            btnType={ButtonType.Link}
            href="http://www.baidu.com"
            target="_blank"
            size={ButtonSize.Large}
          >
            BaiduLink
          </Button>
          <Button btnType={ButtonType.Primary} disabled size={ButtonSize.Large}>
            BaiduLink
          </Button>
        </div>
        <h2>Alert组件</h2>
        <div className="block alerts">
          <Alert type={AlertType.Success} message="Alert Success" />
          <Alert type={AlertType.Error} message="Alert Error" />
          <Alert type={AlertType.Info} message="Alert Info" />
          <Alert type={AlertType.Warning} message="Alert Warning" />
        </div>
        <h2>Menu组件</h2>
        <div className="block menus">
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
          <Menu
            defaultIndex={'0'}
            onSelect={(index) => console.log(index)}
            mode="vertical"
            defaultOpenSubMenus={['2']}
          >
            <MenuItem>项目1</MenuItem>
            <MenuItem disabled>项目2</MenuItem>
            <MenuItem>项目3</MenuItem>
            <SubMenu title="dropdown">
               <MenuItem>dropdown1</MenuItem>
               <MenuItem>dropdown2</MenuItem>
               <MenuItem>dropdown3</MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <h2>选项卡组件</h2>
        <div className="block tab">
           <Tabs defaultIndex={0} onSelect={(index)=>console.log(index)}>
              <TabItem label="选项卡一">this is tab1</TabItem>
              <TabItem label="选项卡二" disabled>this is tab2</TabItem>
              <TabItem label="选项卡三">this is tab3</TabItem>
           </Tabs>
        </div>
        <h2>Icon组件</h2>
        <Icon icon='coffee' theme="danger" size="3x"/>
        <Icon icon='adn' theme="danger" size="3x"/>
      </header>
    </div>
  );
};

export default App;
