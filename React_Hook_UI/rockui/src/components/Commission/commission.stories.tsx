import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import Commissio from "./commission";

const data1 = [
  {
    id: 1,
    title: "2020年",
    content: "工作总结",
  },
  {
    id: 2,
    title: "2021年",
    content: "工作总结",
  },
];

const data2 = [
    {
      id: 1,
      title: "2020年",
      content: "工作总结",
      children: [
        {
          id: 2,
          title: "1月",
          content: "1月份提纲"
        }
    ]
}
  ];

  const data3 = [
    {
      id: 1,
      title: "2020年",
      content: "工作总结",
      children: [
        {
          id: 2,
          title: "1月",
          content: "1月份提纲",
       },
       {
        id: 3,
        title: "2月",
        content: "2月份提纲",
        children: [
            {
              id: 2,
              title: "1月",
              content: "1月份提纲",
           }]
       }
    ]
    }
  ];


  const data33 = [
    {
      id: 1,
      title: "第一章",
      content: "html 简介",
      children: [
        {
          id: 2,
          title: "html 常用标签",
          content: <p style={{backgroundColor:'#ff0'}}><div>注释</div><div> h1~h6</div><div>标题标签</div><div>段落标签</div></p>,
       },
       {
        id: 3,
        title: "Input",
        content: "2月份提纲",
        children: [
            {
              id: 2,
              title: "button",
              content: "button种类1",
              children: [
                {
                  id: 3,
                  title: "button",
                  content: "button种类2",
                  children: [
                    {
                      id: 4,
                      title: "button种类",
                      content: "button 按钮1",
                   }]
               }]
           }]
       }
    ]
    }
  ];

  
const data4 = [
    {
      id: 1,
      title: "2020年",
      content: "工作总结",
      isDone: false,
      children: [
        {
          id: 2,
          title: "1月",
          content: "1月份提纲",
          isDone: true,
          children: [
            {
              id: 4,
              title: "11日",
              content: "11提纲",
              isDone: true,
            },
            {
              id: 5,
              title: "12日",
              content: "12提纲+++++",
              isDone: false,
            },
            {
              id: 41,
              title: "13日",
              content: "11提纲",
              isDone: true,
            },
            {
              id: 52,
              title: "14日",
              content: "12提纲+++++",
              isDone: false,
            },
          ],
        },
        {
          id: 3,
          title: "2月",
          content: "1月份提纲",
          children: [
            {
              id: 47,
              title: "11日",
              content: "11提纲",
              isDone: true,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "2021年",
      content: "工作总结",
      isDone: true,
      children: [
        {
          id: 7,
          title: "1月",
          content: "1月份提纲",
          children: [
            {
              id: 8,
              title: "11日",
              content: "11提纲",
              isDone: true,
            },
            {
              id: 9,
              title: "12日",
              content: "12提纲+++++",
              isDone: false,
            },
          ],
        },
        {
          id: 10,
          title: "2月",
          content: "1月份提纲",
        },
      ],
    },
  ];
  

  
const defaultCommissio1 = () => (
  <div className="block alerts">
    <Commissio dataSource={data1} />
  </div>
);
const defaultCommissio2 = () => (
  <div className="block alerts">
    <div style={{ display:'flex' }}>
      <Commissio dataSource={data1} theme="info" />
      <Commissio dataSource={data1} theme="danger" />
      <Commissio dataSource={data1} theme="warning" />
      <Commissio dataSource={data1} theme="primary" />
    </div>
  </div>
);
const defaultCommissio3 = () => (
    <div className="block alerts">
      <div style={{ display:'flex' }}>
        <Commissio dataSource={data2} theme="info" />
        <Commissio dataSource={data3} theme="warning" />
        <Commissio dataSource={data33} theme="danger" />

      </div>
    </div>
  );

  const defaultCommissio4 = () => (
    <div className="block alerts">
      <div style={{ display:'flex' }}>
        <Commissio dataSource={data4} theme="info" />
      </div>
    </div>
  );

  const defaultCommissio5 = () => (
    <div className="block alerts">
      <div style={{ display:'flex' }}>
        <Commissio dataSource={data4} isHandle theme="info" />
      </div>
    </div>
  );
storiesOf("Commissio待办", module)
  .add("简单的待办", defaultCommissio1)
  .add("简单的待办--配置主题色", defaultCommissio2)
  .add("创建的日程", defaultCommissio3)
  .add("展示计划完成情况", defaultCommissio4)
  .add("鼠标滑入操作计划完成情况", defaultCommissio5)



