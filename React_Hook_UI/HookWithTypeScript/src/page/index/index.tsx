import React from 'react'
import {  Link } from "react-router-dom";

interface Props{
   name:string
}

const Index:React.FC<Props>=(props)=>{
    return (
        <div>
             hello，你来啦
             <Link to="/home">进入</Link>
        </div>
    )
}

export default Index;