import React from 'react'
import Page2 from '../page2'
import { HashRouter as Router , Route, Link } from "react-router-dom";
import './index.less'

interface Props{

}
const Home:React.FC<Props>=(props)=> {
    return (
        <div className="home_wrapper">
             首页
        </div>
    )
}

export default Home;