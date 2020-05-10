
# UI

zhongguose.com

## 样式解决方案分析

- Inline CSS
- CSS in JS 
- styled Component
- Sass/Less

## 样式文件结构
styles/ 
   _variables.scss(各种变量以及可配置设置)
   _minxins.scss(全局 mixins)
   _functions.scss(全局 functions)
components/
   Button/
     style.scss(组件单独的样式)


## 创建自己组件库的色彩体系
- 系统色板 - 基础色斑 + 中性色板
- 产品色斑 - 品牌色 + 功能色板

## Boostrap的色彩体系

## 组件库的色彩体系

#006EFD
#6C757D
#52C41A
#FADB14
#DC3545
#17A2B8

## 安装预处理器
npm install node-sass --save


rem  是和根元素关联的 
1rem = 16px


## normalize.css/css.reset

// styles/_reboot.scss
提供了一个跨浏览器的样式的统一方案
保护浏览器有用样式
css.reset是全部抹掉浏览器样式
修复浏览器bug
优化css


## classnames
[github](https://www.npmjs.com/package/classnames)
根据true or false 
npm install classnames --save
npm install @types/classnames --save


## 测试

### 国内互联网测试现状
- 重视成都不足
- 没有时间
- 不会写测试

### 测试的重要性
- 高质量的代码
- 更早的发现Bug、减少成本
- 让重构和升级变得更加容易可靠
- 开发流程更加敏捷

### React组件特别适合单元测试
- Component-组件
- Function-函数
- 单向数据流

### Jest通用测试框架
https://jestjs.io/

Jest is a delightful javascript Testing Framework
断言：通过判断我们计算的值是否于预期相等

 npx jest jest.test.js --watch

 npm install --save-dev @testing-library/jest-dom


## Icon
雪碧图--》font-icon---》svg图标
font-icon图标 会有奇怪bug
Font
react-fontawesome
[github](https://github.com/FortAwesome/react-fontawesome/)
[web](https://fontawesome.com/)

$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/react-fontawesome

// 导入
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon={faCoffee} size="lg" />



## Storybook for react
[Storybook for react](https://storybook.js.org/guides/guide-react/)
- 安装
> cnpm i @storybook/cli -g
> sb init --type react_scripts
> npm install --save-dev @storybook/react
或
> npx -p @storybook/cli sb init

git diff
- 运行
> npm run storybook

## 安装addon-info
> npm i -D @storybook/addon-info
> npm install --save @types/storybook/addon-info