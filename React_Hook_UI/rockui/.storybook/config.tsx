import React from "react";
import { configure,addDecorator,addParameters } from "@storybook/react";
import '../src/styles/index.scss';

import {withInfo} from '@storybook/addon-info';


// 配置全局的居中 addDecorator 中添加插件
// const wrapperStyles: React.CSSProperties={
//    padding:"20px 40px"
// // }
// var CenterDecorator=(storyFn:any)=><div>
// <h3>组件演示</h3>
// {storyFn()}
// </div>
// addDecorator(CenterDecorator)
addDecorator(story =><div>{story()}</div>)
addDecorator(withInfo)
addParameters({
    info:{
        header:false,
        inline:true
    }
})

var loaderFn = () => {
    var allExports = [require('../src/welcome.stories.tsx')];
    var req = require.context('../src/components', true, /\.stories\.tsx$/);
    req.keys().forEach(fname => allExports.push(req(fname)));
    return allExports;
  };

// https://storybook.js.org/docs/basics/writing-stories/
//指定story的位置
// configure(require.context('../src',true,/\.stories\.tsx$/), module);

configure(loaderFn, module);

