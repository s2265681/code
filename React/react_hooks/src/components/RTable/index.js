import React, { useState, useEffect, useRef } from "react";
import "./index.css";

function RTable({
  dataSource = [],
  columns = [],
  rowSelection = {},
  borderd = false,
  loading = false,
  isTheme = "",
  expandable = undefined // 展开行
}) {
  const { type = "", selectedRowKeys, onChange, rowKey } = rowSelection;
  // 数据管理
  const [_dataSource, setSourceData] = useState(dataSource);
  // 设置排序
  const [isAscOrder, setOrder] = useState(false);
  // 设置鼠标滑入变色
  const [isColorIndex, getColor] = useState();
  // 设置展开值
  const [isExpend, setIsExpend] = useState({})


  // const trRef = useRef(null);
  // 初始化
  useEffect(() => {
    {
      columns.map(c => c && c.sorter instanceof Object && order(c.sorter));
    }
  }, []);

  useEffect(() => {
    setSourceData(dataSource);
  }, [dataSource]);

  // 每一个选中时
  function onSelectChange(Keys) {
    if (selectedRowKeys.includes(Keys)) {
      selectedRowKeys.splice(
        selectedRowKeys.findIndex(e => e === Keys),
        1
      );
    } else {
      selectedRowKeys.push(+Keys);
    }
    type === "checkbox" ? onChange(selectedRowKeys.slice()) : onChange([Keys]);
  }

  // 全部选中时
  function checkedAll(currentKeys) {
    if (currentKeys.length !== _dataSource.length) {
      let keys = [];
      _dataSource.map((e, i) => keys.push(rowKey ? +e[rowKey] : i));
      onChange(keys.slice());
    } else {
      onChange([]);
    }
  }

  // 渲染自定义render数据
  function renderSource(c, d, didx) {
    if (typeof c.render === "function") {
      return c.render(d[c.dataIndex], d, didx);
    } else {
      return d[c.dataIndex];
    }
  }

  // 排序
  function order(sorter) {
    _dataSource.sort(sorter.compare);
    if (isAscOrder) {
      setSourceData(_dataSource.slice());
      setOrder(false);
    } else {
      setSourceData(_dataSource.reverse().slice());
      setOrder(true);
    }
  }

  // 展开行配置 必须搭配rowSelection.rowKey否则按index删除的时候会有问题
  function _onExpand(key) {
     console.log(key)
    if(isExpend[key]){
       isExpend[key] = false
    }else{
      isExpend[key] = true
    }
    setIsExpend(isExpend)
    expandable&&expandable.onExpand(key)
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", filter: isTheme }}>
      <table
        style={{
          borderTop: borderd ? "#999 1px solid" : "",
          borderBottom: borderd ? "#666 1px solid" : "",
          filter: loading ? "opacity(0.5)" : "",
          position: "relative"
        }}
      >
        {/* Loading */}
        {loading && <span className="Loading">Loading...</span>}

        <thead>
          <tr
            style={{
              borderBottom: borderd ? "#999 1px solid" : "",
              background: "#eee"
            }}
          >
            {type && (
              <input
                type={type}
                checked={selectedRowKeys.length === _dataSource.length}
                disabled={type === "radio"}
                onChange={() => checkedAll(selectedRowKeys)}
                style={{ marginRight: 10 }}
              />
            )}

            {expandable && (
              <span style={{ display: "inline-block", width: 20 }}></span>
            )}

            {columns.map(c => {
              return (
                <th key={c.key}>
                  {c.title} &nbsp;
                  {c && c.sorter instanceof Object ? (
                    <span
                      onClick={() => order(c.sorter)}
                      style={{ cursor: "pointer" }}
                    >
                      {isAscOrder ? "^" : "v"}
                      {() => order(c.sorter)}
                    </span>
                  ) : (
                    ""
                  )}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {_dataSource.map((d, didx) => {
            return (
              <>
                <tr
                  key={d.key}
                  style={{
                    borderBottom: borderd ? "#999 1px solid" : "",
                    background: isColorIndex === didx ? "#eee" : ""
                  }}
                  onMouseOver={() => getColor(didx)}
                  onMouseOut={() => getColor()}
                >
                  {expandable &&  (
                    <span
                      style={{ 
                          display: "inline-block",
                          width: 20,
                          cursor:'pointer'
                         }}
                      onClick={() => _onExpand(rowKey ? +d[rowKey] : didx , rowKey)}
                    >
                      {isExpend[rowKey ? +d[rowKey] : didx]?'-':'+'} 
                    </span>
                  )}

                  {type && (
                    <input
                      type={type}
                      checked={selectedRowKeys.includes(
                        rowKey ? +d[rowKey] : didx
                      )}
                      onChange={() =>
                        onSelectChange(rowKey ? +d[rowKey] : didx)
                      }
                      name="radio"
                      style={{ marginRight: 10 }}
                    />
                  )}

                  {columns.map(c => (
                    <td key={didx}>{renderSource(c, d, didx)}</td>
                  ))}
                </tr>
                {/* 展开行 */}
                {expandable&&expandable && isExpend[rowKey ? +d[rowKey] : didx] && (
                      <tr
                        style={{
                          borderBottom: borderd ? "#999 1px solid" : ""
                        }}
                      >
                        <td colspan={columns.length + 1}> 
                            {expandable&&expandable.expandedRowRender(d)}
                         </td>
                      </tr>
                    )
                  }
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RTable;
