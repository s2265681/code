import React from "react";
import "./App.css";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import TabItem from "./components/Tabs/tabsItem";
import Tabs from "./components/Tabs/tabs";
import Icon from './components/Icon/icon'
import Bg from './components/Bg'
import Spider from './components/Spider';
import Table from "./components/Table";
import Spin from './components/Spin'

const dataSource = [
  {
    id: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
    type: 1,
    description:'胡彦斌是西湖区湖底公园1号的',
    Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",

  },
  {
    id: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
    type: 2,
    description:'胡彦祖是西湖区湖底公园1号的',
    Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",

  },
  {
    id: "3",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description:'王祖蓝是西湖区湖底公园1号的',
    Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",

  },
  {
    id: "4",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description:'王祖蓝是西湖区湖底公园1号的',
    Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",

  },
  {
    id: "5",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description:'王祖蓝是西湖区湖底公园1号的',
    Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",

  }
];

// columns
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name"
  },
  {
    title:'图片',
    dataIndex:'Pic',
    key:'Pic',
    width:200,
    render:(t:string)=><img style={{width:150,height:150}} src={t} alt={t}></img>
   },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    sorter: {
      compare: (a: { age: number; }, b: { age: number; }) => a.age - b.age
    }
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
    width:300
  },
  {
    title: "类型",
    dataIndex: "type",
    key: "type",
    render(t: number, r: any, i: any) {
      // console.log(t,r,i)
      return (
        <span style={{ color: "#f00" }}>
          {t === 1 ? "蔬菜" : t === 2 ? "水果" : "主食"}
        </span>
      );
    }
  }
];


const App: React.FC = () => {
  return (
    <div className="App">
      <Spin/>
      <Table
      dataSource={dataSource}
      columns={columns}
      rowSelection={{
        type: 'checkbox',
        // selectedRowKeys:[1,2],
        rowKey: "id",
        rowChoosed:true,  // 点击行是否选中
        onChange: (selectedRowKeys: any) => console.log(selectedRowKeys,'selectedRowKeys>>')
      }}
      borderd={true}
      // loading={true}
      // isTheme={ "sepia(.6)"}
      expandable = {{
        // isSingExped:false,
        expandedRowRender: record => <span style={{color:'rgb(100, 155, 0)'}}>{record.description}</span>,
        // onExpand:(key)=>console.log(key,'key1111'),
        // rowExpandable: record => record,
       }}
      scroll={{ y: 600  }} 
    />
       {/* 
           <Spider   
          autoplay={false}
          initIdx={0}
          deployTime={3000} 
          height={400}
        >
          <img src="http://img3.imgtn.bdimg.com/it/u=1553709961,3652782060&fm=26&gp=0.jpg" alt="图一"/>
          <img src="http://img4.imgtn.bdimg.com/it/u=3471735586,1899139408&fm=26&gp=0.jpg" alt="图二"/>
          <img src="http://img2.imgtn.bdimg.com/it/u=1303806583,1572175195&fm=26&gp=0.jpg" alt="图三"/>
      </Spider>
      
      <header className="App-header">
        <h2>Button组件</h2>
        <div className="block buttons">
          <Button
            size={ButtonSize.Small}
            autoFocus
            onClick={(e) => {
              e.preventDefault();
              // alert("123");
            }}
            className="tok"
          >
            hello
          </Button>
        <Button btnType={ButtonType.Primary}>Primary</Button>
          <Button btnType={ButtonType.Dashed}>Dashed</Button>
          <Button btnType={ButtonType.Default} size={ButtonSize.Large}>
            Default
          </Button>
          <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
            Danger
          </Button>
          <Button
            btnType={ButtonType.Link}
            href="http://www.baidu.com"
            target="_blank"
            size={ButtonSize.Large}
          >
            BaiduLink
          </Button>
          <Button btnType={ButtonType.Primary} disabled size={ButtonSize.Large}>
            BaiduLink
          </Button>
       
       
          </div>
        <h2>Alert组件</h2>
        <div className="block alerts">
          <Alert type={AlertType.Success} message="Alert Success" />
          <Alert type={AlertType.Error} message="Alert Error" />
          <Alert type={AlertType.Info} message="Alert Info" />
          <Alert type={AlertType.Warning} message="Alert Warning" />
        </div>
        <h2>Menu组件</h2>
        <div className="block menus">
          <Menu defaultIndex={'0'} onSelect={(index) => console.log(index)}>
            <MenuItem>项目1</MenuItem>
            <MenuItem>项目2</MenuItem>
            <MenuItem disabled>项目3</MenuItem>
            <SubMenu title="dropdown">
                <MenuItem>dropdown1</MenuItem>
                <MenuItem>dropdown2</MenuItem>
                <MenuItem>dropdown3</MenuItem>
            </SubMenu>
          </Menu>
          <Menu
            defaultIndex={'0'}
            onSelect={(index) => console.log(index)}
            mode="vertical"
            defaultOpenSubMenus={['2']}
          >
            <MenuItem>项目1</MenuItem>
            <MenuItem disabled>项目2</MenuItem>
            <MenuItem>项目3</MenuItem>
            <SubMenu title="dropdown" >
               <MenuItem>dropdown1</MenuItem>
               <MenuItem>dropdown2</MenuItem>
               <MenuItem>dropdown3</MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <h2>选项卡组件</h2>
        <div className="block tab">
           <Tabs defaultIndex={0} onSelect={(index)=>console.log(index)}>
              <TabItem label="选项卡一">this is tab1</TabItem>
              <TabItem label="选项卡二" disabled>this is tab2</TabItem>
              <TabItem label="选项卡三">this is tab3</TabItem>
           </Tabs>
        </div>

             <Bg animationType="left" type="start"/>
        <h2>Icon组件</h2>
        <Icon icon='coffee' theme="warning" size="2x"/>
        <Icon icon='coffee' theme="danger" size="3x"/>
        <Icon icon='arrow-down' theme="primary" size="4x"/>
        <Icon icon='arrow-up' theme="success" size="5x"/>
       
      </header>
          */}
    </div>
  );
};

export default App;
