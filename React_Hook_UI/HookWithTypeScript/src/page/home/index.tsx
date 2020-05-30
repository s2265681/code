import React from "react";
import Page2 from "../page2";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./index.less";
import { Button, Alert, Icon, Menu, Tabs, Spider, Table } from "rockui";

const { MenuItem, SubMenu } = Menu;
const { TabItem } = Tabs;

interface Props {}

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
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
  },
  {
    id: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
    type: 2,
    description: "胡彦祖是西湖区湖底公园1号的",
  },
  {
    id: "3",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
  },
  {
    id: "4",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
  },
  {
    id: "5",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
  },
  {
    id: "6",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
  },
  {
    id: "7",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
  },
  {
    id: "8",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
  },
];

const Home: React.FC<Props> = (props) => {
  return (
    <div className="home_wrapper">
      首页
      <br />
      <h3>使用rockui组件测试</h3>
      <Button btnType="primary" size="lg">
        rockui!!
      </Button>
      <br />
      <Alert message="Alert Success" />
      <br />
      <Icon icon="coffee" theme="warning" size="2x" />
      <br />
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
        <TabItem label="选项卡一">this is tab1</TabItem>
        <TabItem label="选项卡二" disabled>
          this is tab2
        </TabItem>
        <TabItem label="选项卡三">this is tab3</TabItem>
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
      <Table
        dataSource={dataSource}
        columns={columns}
        borderd
        isTheme={"sepia(.6)"}
        scroll={{ y: 200 }}
        expandable={{
          expandedRowRender: (record) => (
            <span style={{ color: "rgb(100, 155, 0)" }}>
              {record.description}
            </span>
          ),
          onExpand: (key) => console.log(key, "key1111"),
          rowExpandable: (record) => record.name !== "王祖蓝",
        }}
        rowSelection={{
          type: "checkbox",
          rowKey: "id",
          rowChoosed: true, // 点击行是否选中
          onChange: (selectedRowKeys: any) =>
            console.log(selectedRowKeys, "selectedRowKeys>>"),
        }}
      />
    </div>
  );
};

export default Home;
