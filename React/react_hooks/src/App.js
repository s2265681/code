import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactHooks from "./components/ReactHooks";
import Home from './pages/Home';
import HookUseReducer1 from './components/UseReducer1';
import HookUseReducer2 from './components/UseReducer2';
import Picture from './components/Picture';
import ItemIndex from './pages/Item';
import RTable from './pages/RTable'

import { HashRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
          <h3>React Hooks</h3>
          <Link to="/" style={{margin:'0 10px'}}>Home</Link> 
          <Link to="/ReactHooks" style={{margin:'0 10px'}}>ReactHook</Link>   
          <Link to="/HookUseReducer1" style={{margin:'0 10px'}}>UseReducer1</Link> 
          <Link to="/HookUseReducer2" style={{margin:'0 10px'}}>UseReducer2</Link> 
          <Link to="/picture" style={{margin:'0 10px'}}>pictureSelect组件</Link>
          <Link to="/itemIndex" style={{margin:'0 10px'}}>SeacherItem组件</Link>
          <hr/>
          <br/>
          <h3>React 仿 Antd</h3>
          <Link to="/RTable" style={{margin:'0 10px'}}>RTable组件</Link>
          <hr/>
          <Route path="/" exact component={Home}></Route>
          <Route path="/ReactHooks" component={ReactHooks}></Route>
          <Route path="/HookUseReducer1" component={HookUseReducer1}></Route>
          <Route path="/HookUseReducer2" component={HookUseReducer2}></Route>
          <Route path="/picture" component={Picture}></Route>
          <Route path="/itemIndex" component={ItemIndex}></Route>
          <Route path="/RTable" component={RTable}></Route>
        </div>
    </Router>
  );
}

export default App;
