import React,{useState,useEffect} from "react";
import Page2 from "../page2";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import _ from 'lodash';

import "./index.css";
import {
  Button,
  Alert,
  Table,
  Icon,
  Menu,
  Tabs,
  Spider,
  Spin,
  Animation,
  Commission
} from "rockui";
// const {AlertType}  = Alert;
// import {Table} from "antd";
const { MenuItem, SubMenu } = Menu;
const { TabItem } = Tabs;

interface Props {}

const columns: any = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    width: 100,
  },
  {
    title: "图片",
    dataIndex: "Pic",
    key: "Pic",
    width: 200,
    render: (t: string) => (
      <img style={{ width: 150, height: 150 }} src={t} alt={t}></img>
    ),
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    width: 200,
    sorter: {
      compare: (a: { age: number }, b: { age: number }) => a.age - b.age,
    },
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
    width: 300,
  },
  {
    title: "类型",
    dataIndex: "type",
    key: "type",
    // width: 100,
    render(t: number, r: any, i: any) {
      return (
        <span style={{ color: "#f00" }}>
          {t === 1 ? "蔬菜" : t === 2 ? "水果" : "主食"}
        </span>
      );
    },
  },
];

const dataSource = [
  {
    id: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
    type: 1,
    description: "胡彦斌是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
  {
    id: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
    type: 2,
    description: "胡彦祖是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
  {
    id: "3",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
  {
    id: "4",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
  {
    id: "5",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
  {
    id: "6",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
    description: "王祖蓝是西湖区湖底公园1号的",
  },
  {
    id: "7",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
  {
    id: "8",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
];


const commissionData =[{"id":1,"title":"<h2>rokui组件</h2>","content":"## \n使用： \n```\nnpm install rockui \nimport \"rockui/dist/rockui.css\";\nimport { Button, Icon } from \"rockui\"\n\n文档：https://www.npmjs.com/package/rockui\n```\n\n\n\n","children":[],"isDone":true},{"id":4,"title":"<h2>Button组件</h2>","content":"## \n// 使用\n```\n   <Button\n      size={ButtonSize.Small}\n      autoFocus\n      onClick={e => {\n        e.preventDefault();\n      }}\n      className=\"btn\"\n   >\n```","children":[{"id":5,"title":"<h3>参数列表</h3>","content":"# \n\n属性 |  类型| 是否必填 | 默认值 | 可选参数 \n|-|-|-|-|-|\nbtnType | | String |  否 |  \"primary\" |\"default\" \\| \"dashed\" \\|\"danger\" \\|\"link\" | \"default\" \nsize | 否 | \"lg\" \\| \"sm\" | \"sm\" \ndisabled| Boolean |否  | true \\| false | false \nhref | String | 否 | \"\" | \"\"  \n"},{"id":10,"title":"<h3>预览</h3>","content":" ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200607191155103.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE2MDM4NQ==,size_16,color_FFFFFF,t_70,zoom=\"20%\")"}]},{"id":6,"title":"<h2>Spider</h2>","content":"## \n// 使用\n```js\n  <Spider   \n      autoplay={false}\n    >\n      <img src=\"http://img3.imgtn.bdimg.com/it/u=1553709961,3652782060&fm=26&gp=0.jpg\" alt=\"图一\"/>\n      <img src=\"http://img4.imgtn.bdimg.com/it/u=3471735586,1899139408&fm=26&gp=0.jpg\" alt=\"图二\"/>\n      <img src=\"http://img2.imgtn.bdimg.com/it/u=1303806583,1572175195&fm=26&gp=0.jpg\" alt=\"图三\"/>\n  </Spider>\n  ```","children":[{"id":7,"title":"<h3>参数列表</h3>","content":"### \n\n属性 | 说明 | 类型| 是否必填 | 默认值 | 可选参数 \n|-|-|-|-|-|-|\nautoplay | 是否自动轮播 | | Boolean |  false |  true\\|false | \"true\" \ndeployTime | 延迟时间 |  Number | 否 | 1000  | \"--\" \ninitIdx| 第几个开始 | Boolean |否  | true \\| false | false \nheight | 轮播图高度| Number | 否 | 300 | \"\"  \n"},{"id":11,"title":"<h3>预览</h3>","content":" <img  height=\"300\" width=\"800\" src=\"https://img-blog.csdnimg.cn/20200607191459690.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE2MDM4NQ==,size_16,color_FFFFFF,t_70\"/>"}]},{"id":8,"title":"<h2>Table</h2>","content":"\n##\n// 使用\n```js\nconst columns = [\n  {\n    title: \"姓名\",\n    dataIndex: \"name\",\n    key: \"name\",\n     sorter: {\n      compare: (a: { id: number }, b: { id: number }) => a.id - b.id,\n    },\n    render:(t:string)=><img style={{width:150,height:150}} src={t} alt={t}></img>\n  }]\nconst dataSource = [\n  {\n    id: \"1\",\n    name: \"胡彦斌\",\n    age: 32,\n    address: \"西湖区湖底公园1号\",\n    type: 1,\n    description: \"胡彦斌是西湖区湖底公园1号的\",\n    Pic:\"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg\",\n  }\n]\n\n  <Table\n    dataSource={dataSource}\n    columns={columns}\n    borderd\n    isTheme={\"sepia(.6)\"}\n    scroll={{ y: 600 }}\n    expandable={{\n      expandedRowRender: (record) => (\n        <span style={{ color: \"rgb(100, 155, 0)\" }}>{record.description}</span>\n      ),\n      onExpand: (key) => console.log(key, \"key1111\"),\n      rowExpandable: (record) => record.name !== \"王祖蓝\",\n    }}\n    rowSelection={{\n      type: \"checkbox\",\n      rowKey: \"id\",\n      rowChoosed: false, // 点击行是否选中\n      onChange: (selectedRowKeys: any) =>\n        console.log(selectedRowKeys, \"selectedRowKeys>>\"),\n    }}\n  />\n  ```\n","children":[{"id":9,"title":"<h3>参数列表</h3>","content":"## \n\n属性 | 说明 | 类型| 是否必填 | 默认值 | 可选参数 \n|-|-|-|-|-|-|\ndataSource | 数据源 | | Array |  true |  -- | -- \ncolumns | 列内容 |  Array | true | --  | --\nrowSelection| 设置行 | Object | 否  | {} | --\nborderd | 设置table边框 | Boolean | 否 | -- | -- \nloading | 设置table Loading | Boolean | 否 | -- | -- \nisTheme | 设置table filter的属性 | string | 否 | -- | -- \nexpandable| 设置行展开 | Object | 否  | {} | --\nscroll| 设置超出高度滚动| Object | 否 | {x:300,y:300} | --\n"},{"id":12,"title":"<h3>预览</h3>","content":"<img  height=\"300\" width=\"800\" src=\"https://img-blog.csdnimg.cn/20200607192110378.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE2MDM4NQ==,size_16,color_FFFFFF,t_70\"/>"}]}]
const Home: React.FC<Props> = (props) => {
  let localdate:string =localStorage.getItem('PLANDATA')||"";
  let localdateArr:Array<any> =localdate&&JSON.parse(localdate) || [];
  let initDate = localdateArr.length!==0?localdateArr:commissionData||[];
  const [planDate, setPlanDate] = useState(initDate)

  useEffect(()=>{
    localStorage.setItem("PLANDATA",JSON.stringify(planDate))
  },[planDate])

  console.log(planDate,'planDate>>>');
  return (
    <Animation>
        <div className="home_wrapper">
          首页
          <br />
          <h3>使用rockui组件测试</h3>
          <div style={{display:'flex'}}>
          <Commission 
            dataSource={planDate} 
            isHandle 
            theme="info"
            onChange={(e,itemId,_newData)=>{
              setPlanDate(_.cloneDeep(_newData))
            }}
            isEditable
           />
        </div>
          <Menu defaultIndex={"0"} onSelect={(index) => console.log(index)}>
            <MenuItem>项目1</MenuItem>
            <MenuItem>项目2</MenuItem>
            <MenuItem disabled>项目3</MenuItem>
            <SubMenu title="dropdown">
              <MenuItem>dropdown1</MenuItem>
              <MenuItem>dropdown2</MenuItem>
              <MenuItem>dropdown3</MenuItem>
            </SubMenu>
          </Menu>
          <br />
          <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
            <TabItem label="Button">
                <Button btnType="primary" size="lg">
                    primary-btn
                </Button>
                  <br />
                  <br />
                <Button btnType="danger" size="lg">
                    danger-btn
                </Button>
                  <br />
                  <br />
                  <Button btnType="danger" size="lg">
                  danger-btn
                  </Button>
                  <br />
                <br />
                <Button btnType="link" size="lg">
                  link-btn
                </Button>
            </TabItem>
            <TabItem label="Alert">
                  <Alert message="Alert Success"/>
                  <Alert message="Alert Success" type="info"/>
                  <Alert message="Alert Success" type="error"/>
            </TabItem>
            <TabItem label="Icon">
                     <a href="https://fontawesome.com/icons?d=gallery" target="_blank">您可以使用这里面的icon</a>
                     <br/>
                     <br/>
                    <Icon icon="coffee" theme="warning" size="2x" />
                    <br />
                    <br/>
                    <Icon icon="angle-down" theme="info" size="2x" />
                    <br />
                    <br/>
                    <Icon icon="bell-slash" theme="success" size="2x" />
                    <br />
                    <br/>
                    <Icon icon="allergies" theme="danger" size="2x" />
                    <br />
                    <br/>
                    <Icon icon="ambulance" theme="success" size="3x" />
            </TabItem>
          </Tabs>
          
          <Spider autoplay={false} initIdx={0} deployTime={3000} height={400}>
            <img
              src="http://img3.imgtn.bdimg.com/it/u=1553709961,3652782060&fm=26&gp=0.jpg"
              alt="图一"
            />
            <img
              src="http://img4.imgtn.bdimg.com/it/u=3471735586,1899139408&fm=26&gp=0.jpg"
              alt="图二"
            />
            <img
              src="http://img2.imgtn.bdimg.com/it/u=1303806583,1572175195&fm=26&gp=0.jpg"
              alt="图三"
            />
          </Spider>
          <br />
          <Table
            dataSource={dataSource}
            columns={columns}
            scroll={{
                y : 600
            }}
          />
        </div>
        
        </Animation>
  );
};

export default Home;
