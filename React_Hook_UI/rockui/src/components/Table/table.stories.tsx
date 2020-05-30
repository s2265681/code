import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Table from "./table";
// import { addDecorator } from '@storybook/react';
// import {withInfo} from '@storybook/addon-info';

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
];

const dataSource2 = [
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

// columns1 正常
const columns1 = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
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
  },
];

// columns2 排序
const columns2 = [
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

// columns3 自定义render
const columns3 = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
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

const easyTable1 = () => <Table dataSource={dataSource} columns={columns1} />;
const easyTable2 = () => (
  <Table dataSource={dataSource} columns={columns1} borderd />
);
const easyTable3 = () => (
  <Table
    dataSource={dataSource}
    columns={columns1}
    borderd
    isTheme={"sepia(.6)"}
  />
);

const rowTypeTable1 = () => (
  <Table
    dataSource={dataSource}
    columns={columns1}
    borderd
    isTheme={"sepia(.6)"}
    rowSelection={{
      type: "radio",
    }}
  />
);

const rowTypeTable2 = () => (
  <Table
    dataSource={dataSource}
    columns={columns1}
    borderd
    isTheme={"sepia(.6)"}
    rowSelection={{
      type: "radio",
      rowKey: "id",
      rowChoosed: true, // 点击行是否选中
      onChange: (selectedRowKeys: any) =>
        console.log(selectedRowKeys, "selectedRowKeys>>"),
    }}
  />
);
const rowTypeTable3 = () => (
  <Table
    dataSource={dataSource}
    columns={columns1}
    borderd
    isTheme={"sepia(.6)"}
    rowSelection={{
      type: "checkbox",
      rowKey: "id",
      onChange: (selectedRowKeys: any) =>
        console.log(selectedRowKeys, "selectedRowKeys>>"),
    }}
  />
);

const rowTypeTable4 = () => (
  <Table
    dataSource={dataSource}
    columns={columns1}
    borderd
    isTheme={"sepia(.6)"}
    rowSelection={{
      type: "checkbox",
      rowKey: "id",
      rowChoosed: true, // 点击行是否选中
      onChange: (selectedRowKeys: any) =>
        console.log(selectedRowKeys, "selectedRowKeys>>"),
    }}
  />
);

const extendTable1 = () => (
  <Table
    dataSource={dataSource}
    columns={columns1}
    borderd
    isTheme={"sepia(.6)"}
    expandable={{
      expandedRowRender: (record) => (
        <span style={{ color: "rgb(100, 155, 0)" }}>{record.description}</span>
      ),
      onExpand: (key) => console.log(key, "key1111"),
    }}
  />
);

const extendTable2 = () => (
  <Table
    dataSource={dataSource}
    columns={columns1}
    borderd
    isTheme={"sepia(.6)"}
    expandable={{
      expandedRowRender: (record) => (
        <span style={{ color: "rgb(100, 155, 0)" }}>{record.description}</span>
      ),
      onExpand: (key) => console.log(key, "key1111"),
      rowExpandable: (record) => record.name !== "王祖蓝",
    }}
  />
);

const sortTable1 = () => (
  <Table
    dataSource={dataSource}
    columns={columns2}
    borderd
    isTheme={"sepia(.6)"}
  />
);

const renderTable1 = () => (
  <Table
    dataSource={dataSource}
    columns={columns3}
    borderd
    isTheme={"sepia(.6)"}
  />
);

const scrollTable1 = () => (
  <Table
    dataSource={dataSource2}
    columns={columns3}
    borderd
    isTheme={"sepia(.6)"}
    scroll={{ y: 200 }}
  />
);

const withLoadingTable = () => (
  <Table
    dataSource={dataSource2}
    columns={columns3}
    borderd
    isTheme={"sepia(.6)"}
    scroll={{ y: 200 }}
    loading
  />
);

const allTable = () => (
  <Table
    dataSource={dataSource2}
    columns={columns2}
    borderd
    isTheme={"sepia(.6)"}
    scroll={{ y: 200 }}
    expandable={{
      expandedRowRender: (record) => (
        <span style={{ color: "rgb(100, 155, 0)" }}>{record.description}</span>
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
);
storiesOf("Table Component", module)
  .add("简单Table", easyTable1)
  .add("带边框的Table", easyTable2)
  .add("带Loading的Table", withLoadingTable)
  .add("选择不同filter的Table", easyTable3)
  .add("带radio的Table", rowTypeTable1)
  .add("带radio的Table,点击行选中", rowTypeTable2)
  .add("带checkbox的Table", rowTypeTable3)
  .add("带checkbox的Table,点击行选中", rowTypeTable4)
  .add("带展开行的Table", extendTable1)
  .add("带过滤条件的展开行Table", extendTable2)
  .add("带过排序的Table", sortTable1)
  .add("带过render操作的Table，类型转换，获取行数据", renderTable1)
  .add("可设置超出高度滚动的Table", scrollTable1)
  .add("所有功能展示Table", allTable);
