
import React from 'react'
import { HashRouter as Router , Route, Link } from "react-router-dom";
import Layout from '../components/Layout'
import Home from '../page/home';

import Index from '../page/index';
import Recipe from '../page/recipe/manager-list';
import EditRecipe from '../page/recipe/edit-recipe';
import Page2 from '../page/page2';

interface Props{}
const HRouter:React.FC<Props>=(props)=>{
    return (
    <Router>
          <Layout>
           <Route path="/" pathName="index" name="index" exact component={Index}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/recipe"  component={Recipe}></Route>
            <Route path="/editRecipe"  component={EditRecipe}></Route>
        </Layout>
     </Router>
    )
}

export default HRouter;