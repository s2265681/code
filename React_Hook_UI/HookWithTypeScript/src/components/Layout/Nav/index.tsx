import React from 'react';
import './index.scss';
import {Link} from 'react-router-dom'
interface Props{}
const Nav:React.FC<Props>=(props)=>{
    return (
        <div className="header"> 
        Nav
      <Link to="page1">page1</Link>
        </div>
    )
}

export default Nav;