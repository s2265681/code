import React from "react";
import "./App.css";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import TabItem from "./components/Tabs/tabsItem";
import Tabs from "./components/Tabs/tabs";
import Icon from './components/Icon/icon';
import Bg from './components/Bg';
var App = function () {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("h2", null, "Button\u7EC4\u4EF6"),
            React.createElement("div", { className: "block buttons" },
                React.createElement(Button, { size: ButtonSize.Small, autoFocus: true, onClick: function (e) {
                        e.preventDefault();
                        // alert("123");
                    }, className: "tok" }, "hello"),
                React.createElement(Button, { btnType: ButtonType.Primary }, "Primary"),
                React.createElement(Button, { btnType: ButtonType.Dashed }, "Dashed"),
                React.createElement(Button, { btnType: ButtonType.Default, size: ButtonSize.Large }, "Default"),
                React.createElement(Button, { btnType: ButtonType.Danger, size: ButtonSize.Large }, "Danger"),
                React.createElement(Button, { btnType: ButtonType.Link, href: "http://www.baidu.com", target: "_blank", size: ButtonSize.Large }, "BaiduLink"),
                React.createElement(Button, { btnType: ButtonType.Primary, disabled: true, size: ButtonSize.Large }, "BaiduLink")),
            React.createElement("h2", null, "Alert\u7EC4\u4EF6"),
            React.createElement("div", { className: "block alerts" },
                React.createElement(Alert, { type: AlertType.Success, message: "Alert Success" }),
                React.createElement(Alert, { type: AlertType.Error, message: "Alert Error" }),
                React.createElement(Alert, { type: AlertType.Info, message: "Alert Info" }),
                React.createElement(Alert, { type: AlertType.Warning, message: "Alert Warning" })),
            React.createElement("h2", null, "Menu\u7EC4\u4EF6"),
            React.createElement("div", { className: "block menus" },
                React.createElement(Menu, { defaultIndex: '0', onSelect: function (index) { return console.log(index); } },
                    React.createElement(MenuItem, null, "\u9879\u76EE1"),
                    React.createElement(MenuItem, null, "\u9879\u76EE2"),
                    React.createElement(MenuItem, { disabled: true }, "\u9879\u76EE3"),
                    React.createElement(SubMenu, { title: "dropdown" },
                        React.createElement(MenuItem, null, "dropdown1"),
                        React.createElement(MenuItem, null, "dropdown2"),
                        React.createElement(MenuItem, null, "dropdown3"))),
                React.createElement(Menu, { defaultIndex: '0', onSelect: function (index) { return console.log(index); }, mode: "vertical", defaultOpenSubMenus: ['2'] },
                    React.createElement(MenuItem, null, "\u9879\u76EE1"),
                    React.createElement(MenuItem, { disabled: true }, "\u9879\u76EE2"),
                    React.createElement(MenuItem, null, "\u9879\u76EE3"),
                    React.createElement(SubMenu, { title: "dropdown" },
                        React.createElement(MenuItem, null, "dropdown1"),
                        React.createElement(MenuItem, null, "dropdown2"),
                        React.createElement(MenuItem, null, "dropdown3")))),
            React.createElement("h2", null, "\u9009\u9879\u5361\u7EC4\u4EF6"),
            React.createElement("div", { className: "block tab" },
                React.createElement(Tabs, { defaultIndex: 0, onSelect: function (index) { return console.log(index); } },
                    React.createElement(TabItem, { label: "\u9009\u9879\u5361\u4E00" }, "this is tab1"),
                    React.createElement(TabItem, { label: "\u9009\u9879\u5361\u4E8C", disabled: true }, "this is tab2"),
                    React.createElement(TabItem, { label: "\u9009\u9879\u5361\u4E09" }, "this is tab3"))),
            React.createElement("h2", null, "Icon\u7EC4\u4EF6"),
            React.createElement(Icon, { icon: 'coffee', theme: "warning", size: "2x" }),
            React.createElement(Icon, { icon: 'coffee', theme: "danger", size: "3x" }),
            React.createElement(Icon, { icon: 'arrow-down', theme: "primary", size: "4x" }),
            React.createElement(Icon, { icon: 'arrow-up', theme: "success", size: "5x" })),
        React.createElement(Bg, { animationType: "left", type: "start" })));
};
export default App;
