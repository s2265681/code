# 新建项目
create-react-app project_show --typescript

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
文档中添加详细信息
> npm i -D @storybook/addon-info
> npm install --save @types/storybook/addon-info


## react-docgen
文档生成器
cnpm install --save-dev react-docgen
安装typescript支持
cnpm install --save-dev react-docgen-typescript-loader

## 添加注释
js doc
简单模式
/** 
* Represents a book
*/
复杂模式
/** 
* Represents a book
* @constructor
* param {string} title - the title of book
* param {string} author - the author of book
*/

## AutoComponent Input表单




## build ts

-  "build-ts":"tsc -p tsconfig.build.json",

## build css

Usage

node-sass

Example
node-sass src/style.scss dist/style.css
"build-css":"node-sass ./src/styles/index.scss ./build/index.css"

## npm rimraf package删除文件
npm i rimraf
"clean":"rimraf ./build"

## 测试 npm link
rockui文件夹下
cnpm link
运行到本地node_modules
然后安装rockui
npm link rockui

package.json中添加入口文件
  "main":"build/index.js",
  "module":"build/index.js",
  "types":"build/index.d.ts",

npm link rockui
/Users/shangjiawei/MyGithub/Project/vuepress/code/React_Hook_UI/rockui/node_modules/rockui -> /usr/local/lib/node_modules/rockui -> /Users/shangjiawei/MyGithub/Project/vuepress/code/React_Hook_UI/rockui

npm link bug

Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.

项目react两个版本错误


## npm
npm config ls
npm adduser
shangjiaweidawang
邮箱
npm whoami


## public
语义化版本 2.0.0
semver.org/lang/zh-CN/
主版本号：不兼容的API修改
次版本号：向下兼容的
修订号：fix

 // package.json

 "description":"React component library rock",
  "author":"rockshang",
  "keywords":[
     "Component",
     "UI",
     "React",
     "Rock"
  ],
  "homepage":"https://github.com/s2265681/code/tree/master/React_Hook_UI/rockui",
  "repository":{
    "type":"git",
    "url":"https://github.com/s2265681/code/tree/master/React_Hook_UI/rockui"
  },
  "files":[
    "dist"
  ],


   publish前的钩子函数
  "prepublish":"npm run build",
  "private": false,

   npm publish
  
    === Tarball Details === 
    npm notice name:          rockui                                  
    npm notice version:       0.1.0                                   
    npm notice package size:  15.3 kB                                 
    npm notice unpacked size: 55.7 kB                                 
    npm notice shasum:        3855f443619c979cb0bfa51fbc3179a5d19d5b7a
    npm notice integrity:     sha512-5F8v0RH8o6zA5[...]7DV/nVsoaAMSQ==
    npm notice total files:   43   


## 优化安装的库

dependencies：工作模式的工作流（安装时都会安装，运行时必须的）npm install 时都会解析下载
devDependencies:开发模式的工作流（单元测试、语法转换、程序构建、语法）与核心业务模式和模块无关，但是支撑着开发过程,本地npm install时会安装


## eslint
  npm i eslint --save-dev
  "lint": "eslint --ext js,ts,tsx src --max-warnings 5",

  [文档](eslint.org/docs/user-guide/command-line-interface#ext)

 
## 修改npm run test 
变成结果导向的
[文档](create-react-app.dev/docs/running-tests/#continuous-interation)

跨平台
npm i cross-env --save-dev
把watch改成结果
CI=true npm test



npm run test:nowatch && npm run lint && npm run build && npm publish

## husky
开发中提交代码的检测
npm i husky --save-dev
// package.json
 "husky":{
    "hooks":{
      "pre-commit":"npm run test:nowatch && npm run lint"
      }
  },


## 上传storybook文档到服务器

 "scp-storybook":"scp -r ./storybook-static root@39.96.71.193:/home/rockui"
 "scp-storybook":"scp -i ~/.ssh/id_myserver-rsa.pem -r ./storybook-static root@39.96.71.193:/home/rockui"

 scp -r ./storybook-static/* root@39.96.71.193:/home/project/rockui



 ## 使用 npm-check 更新项目依赖
 
 npm-check -u



 ## Table 问题记录

 1、 table-thead中的th与tbody中的td宽度对不齐？
 
 tbody根据内容自适应，flex布局，另外可以自定义宽度
 thead的宽度，需要通过操作dom节点？虚拟dom，通过hooks中的useRef获得，将宽度付给head解决
 antd同样具有该问题，表头字段特别长的时候，会重新计算head的单元格的宽度

 2、table中clounms全部设置宽度后，导致对不齐的问题？


 ## Animation 问题记录
 组件内部销毁，淡出，销毁事件太快，无法控制，
 只能外部传入isShow