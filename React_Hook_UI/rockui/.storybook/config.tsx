import React from "react";
import { configure,addDecorator,addParameters } from "@storybook/react";
import '../src/styles/index.scss';

import {withInfo} from '@storybook/addon-info';


// 配置全局的居中 addDecorator 中添加插件
const wrapperStyles: React.CSSProperties={
   padding:"20px 40px"
}
const CenterDecorator=(storyFn:any)=><div style={wrapperStyles}>
<h3>组件演示</h3>
{storyFn()}
</div>
addDecorator(CenterDecorator)
addDecorator(withInfo)
addParameters({
    info:{
        header:false,
        inline:true
    }
})


//指定story的位置
configure(require.context('../src',true,/\.stories\.tsx$/), module);
