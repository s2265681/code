import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome page',module)

.add('welcome',()=>{
    return(
    <>
        <h1>欢迎来到rockui组件库</h1>
        <p>rockui是使用React hooks 和 typeScript 打造的react组件库</p>
        <h3>安装试试</h3>
        <code>
            npm install rockui --save
        </code>
        <br/>
<code>
 使用:
 <br/>
{
`
import { Button } from "rockui"
`
}<br/>
{
    `
import "rockui/dist/index.css"
`
}<br/>
{
    `
<Button btnType="primary">Primary</Button>
`
}<br/>
</code>
</>
    )
},{ info:{ disabled:true }})