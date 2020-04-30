# TypeScript
- <a href="#one"> 一、概述</a>
- <a href="#two"> 二、 安装和初试</a>
- <a href="#three"> 三、 数据类型</a>

 ### <a name="one"> 一、概述 </a>

#### 1、什么是Typescript？

官方网站的定义是: **TypeScript 是 JS 类型的超集**，`TypeScript` 是一个js的外壳，需要编译成浏览器可识别的javascript才可以运行。

#### 2、为什么使用Typescript？

- 弥补javascript缺少类型判断，缺少结构化机制(类、模块、接口等)的不足
- 程序更容易理解 (‘代码即注释’)
- 效率更高（编译期就会发现大部分错误）
- 非常好的包容性（完全兼容js、流行项目都支持Ts）

   不足：增加了一些学习成本，短期内增加了一些成本，项目规模小，无必要使用

### <a name="two"> 2、安装和初试</a>

- 安装

```js
npm install -g typescript
```

- 编译

```js
tsc file.ts
```

- 简便方法，安装ts-node

  每次都需要对ts文件编译产生js文件后再通过node 运行，比较麻烦

```js
npm i ts-node -g
ts-node file.ts
```



### <a name="three">  3、数据类型</a>

- 原始数据类型

  - Boolean

    >  let isDone: boolean = false;

  - Null

    > let null = null

  - Undefined

    > let undefined = undefined

  - Symbol

  - String

    > let firstName:string = "jimmy"

  - Number

    > let age: number = 20 | 0b1111;

    注意： undefined和null是其他类型的子集

  Eg:

  >  let num: number = undefined | null

  

- any类型,有明确类型避免使用

>  let notSure :any = 4
>
>   notSure = '1233'
>
>   notSure = true



- 联合类型（|）

> let numberOrString : number | string = 23



- 数组类型

> let arrOfNumbers:number[] = [1,2,3,4]
>
> arrOfNumbers.push(1)
>
> arrOfNumbers.push('1')    // error



- Tuple--特殊定义数组类型的方式

> let user:[string,number] = ['hello', 99]
>
> user = ["world","haha"]  // error



- interface

| 对对象的形状进行描述

| 对类进行抽象

| 鸭子类型 对象的推断，而不是对象本身

```js
interface IPerson{
  readonly id：number;
  name:string;
  age?:number;
}
let tom: IPerson = {
  name : 'tom',
  id:1,
  age:19
}
// 注意： age后面的问号代表可选属性,代表该属性可以不存在，readonly代表只读属性，代表对象中的该属性只能读不能修改。注意接口命名首字母需要大写，I开头不强制， 每个属性定义后用";" 结尾
```



- 函数类型

  





-- 2020 - 4 - 30  07:35Am