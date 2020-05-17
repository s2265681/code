
import React from 'react'
import { HashRouter as Router , Route, Link } from "react-router-dom";
import Layout from '../components/Layout'
import Home from '../page/home';

import Index from '../page/index';
import Page1 from '../page/page1';
import Page2 from '../page/page2';



interface Props{}
const HRouter:React.FC<Props>=(props)=>{
    return (
    <Router>
          <Layout>
           <Route path="/" pathName="index" name="index" exact component={Index}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/page1"  component={Page1}></Route>
            <Route path="/page2"  component={Page2}></Route>
        </Layout>
     </Router>
    )
}

export default HRouter;