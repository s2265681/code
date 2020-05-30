import React from "react";
import "./App.css";
import Spider from './components/Spider';
var App = function () {
    return (React.createElement("div", { className: "App" },
        React.createElement(Spider, { autoplay: false, initIdx: 0, deployTime: 3000, height: 400 },
            React.createElement("img", { src: "http://img3.imgtn.bdimg.com/it/u=1553709961,3652782060&fm=26&gp=0.jpg", alt: "\u56FE\u4E00" }),
            React.createElement("img", { src: "http://img4.imgtn.bdimg.com/it/u=3471735586,1899139408&fm=26&gp=0.jpg", alt: "\u56FE\u4E8C" }),
            React.createElement("img", { src: "http://img2.imgtn.bdimg.com/it/u=1303806583,1572175195&fm=26&gp=0.jpg", alt: "\u56FE\u4E09" }))));
};
export default App;
