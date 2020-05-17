import React from 'react'
import Page1 from '../page1'
import Page2 from '../page2'
import { HashRouter as Router , Route, Link } from "react-router-dom";

interface Props{

}
const Home:React.FC<Props>=(props)=> {
    return (
        <div>
             首页
              {props.children}
        </div>
    )
}

export default Home;