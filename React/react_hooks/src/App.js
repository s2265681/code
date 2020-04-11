import React from "react";
// import logo from './logo.svg';
import "./App.css";
import UseForm from './pages/UseForm'
import UseFetch from './pages/UseFetch'
import UseLayoutEffect from './pages/UseLayoutEffect'
import ReactHooks from "./components/ReactHooks";

import Home from "./pages/Home";
import UseCallBack from "./pages/UseCallBack";


import HookUseReducer1 from "./components/UseReducer1";
import HookUseReducer2 from "./components/UseReducer2";
import Picture from "./components/Picture";
import ItemIndex from "./pages/Item";
import RTable from "./pages/RTable";
import RSpider from "./pages/RSpider";


import { HashRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="menu">
          <h3 style={{ width: 200 }}>导航</h3>

          <div className="dropdown" style={{ height: "50px", width: "200px" }}>
            <a className="dropdown-toggle" href="#">
              React Hooks 仿 Antd
            </a>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/RTable">RTable组件</Link>
                <Link to="/RSpider">轮播图组件</Link>
              </li>
            </ul>
          </div>

          <div class="dropdown" style={{ height: "50px", width: "200px" }}>
            <a class="dropdown-toggle" href="#">
              React Hooks
            </a>
            <ul class="dropdown-menu">
              <li class="dropdown-item">
                <Link to="/">Home</Link>
              </li>
              <li class="dropdown-item">
              <Link to="/UseForm">UseForm</Link>
               </li>
               <li class="dropdown-item">
              <Link to="/UseFetch">UseFetch</Link>
               </li>
               <li class="dropdown-item">
               <Link to="/UseLayoutEffect">UseLayoutEffect</Link>
               </li>
               <li class="dropdown-item">
               <Link to="/UseCallBack">UseCallBack</Link>
               </li>
              <li class="dropdown-item">
                <Link to="/ReactHooks">ReactHooks</Link>
              </li>
              <li class="dropdown-item">
                <Link to="/HookUseReducer1">HookUseReducer1</Link>
              </li>
              <li class="dropdown-item">
                <Link to="/HookUseReducer2">HookUseReducer2</Link>
              </li>
              <li class="dropdown-item">
                <Link to="/picture">picture</Link>
              </li>
              <li class="dropdown-item">
                <Link to="/itemIndex">itemIndex</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <Route path="/" exact component={Home}></Route>
          <Route path="/UseForm" component={UseForm}></Route>
          <Route path="/ReactHooks" component={ReactHooks}></Route>
          <Route path="/HookUseReducer1" component={HookUseReducer1}></Route>
          <Route path="/HookUseReducer2" component={HookUseReducer2}></Route>
          <Route path="/picture" component={Picture}></Route>
          <Route path="/itemIndex" component={ItemIndex}></Route>
          <Route path="/RTable" component={RTable}></Route>
          <Route path="/RSpider" component={RSpider}></Route>
          <Route path="/UseFetch" component={UseFetch}></Route>
          <Route path="/UseLayoutEffect" component={UseLayoutEffect}></Route>
          <Route path="/UseCallBack" component={UseCallBack}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
