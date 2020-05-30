import React from "react";
import "./App.css";
import Table from "./components/Table";
import Spin from './components/Spin';
var dataSource = [
    {
        id: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号",
        type: 1,
        description: '胡彦斌是西湖区湖底公园1号的'
    },
    {
        id: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号",
        type: 2,
        description: '胡彦祖是西湖区湖底公园1号的'
    },
    {
        id: "3",
        name: "王祖蓝",
        age: 22,
        address: "西湖区湖底公园1号",
        type: 3,
        description: '王祖蓝是西湖区湖底公园1号的'
    },
    {
        id: "4",
        name: "王祖蓝",
        age: 22,
        address: "西湖区湖底公园1号",
        type: 3,
        description: '王祖蓝是西湖区湖底公园1号的'
    },
    {
        id: "5",
        name: "王祖蓝",
        age: 22,
        address: "西湖区湖底公园1号",
        type: 3,
        description: '王祖蓝是西湖区湖底公园1号的'
    }
];
// columns
var columns = [
    {
        title: "姓名",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "年龄",
        dataIndex: "age",
        key: "age",
        sorter: {
            compare: function (a, b) { return a.age - b.age; }
        }
    },
    {
        title: "住址",
        dataIndex: "address",
        key: "address",
        width: 300
    },
    {
        title: "类型",
        dataIndex: "type",
        key: "type",
        render: function (t, r, i) {
            // console.log(t,r,i)
            return (React.createElement("span", { style: { color: "#f00" } }, t === 1 ? "蔬菜" : t === 2 ? "水果" : "主食"));
        }
    }
];
var App = function () {
    return (React.createElement("div", { className: "App" },
        React.createElement(Spin, null),
        React.createElement(Table, { dataSource: dataSource, columns: columns, rowSelection: {
                type: 'checkbox',
                // selectedRowKeys:[1,2],
                rowKey: "id",
                rowChoosed: true,
                onChange: function (selectedRowKeys) { return console.log(selectedRowKeys, 'selectedRowKeys>>'); }
            }, borderd: true, loading: true, 
            // isTheme={ "sepia(.6)"}
            expandable: {
                expandedRowRender: function (record) { return React.createElement("span", { style: { color: 'rgb(100, 155, 0)' } }, record.description); },
            }, scroll: { y: 200 } })));
};
export default App;
