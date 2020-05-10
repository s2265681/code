import React from "react";
import { configure,addDecorator } from "@storybook/react";
import '../src/styles/index.scss';
//指定story的位置
configure(require.context('../src',true,/\.stories\.tsx$/), module);


// 配置全局的居中 addDecorator 中添加插件
const styles: React.CSSProperties={
    textAlign:'center'
}
const CenterDecorator=(storyFn:any)=><div style={styles}>{storyFn()}</div>
addDecorator(CenterDecorator)