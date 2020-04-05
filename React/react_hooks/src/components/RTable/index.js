import React,{useState,useEffect} from "react";

function RTable({ dataSource = [], columns = [], rowSelection = {} }) {
  const { type = "", selectedRowKeys, onChange, rowKey } = rowSelection;
  const [_dataSource,setSourceData] = useState(dataSource)
  const [isAscOrder,setOrder] = useState(false)

  // 初始化
  useEffect(() => {
    {columns.map(c => c && c.sorter instanceof Object && order(c.sorter))}
  }, [])

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

  // 渲染tanle数据
  function renderSource(c, d, didx) {
    if (typeof c.render === "function") {
      return c.render(d[c.dataIndex], d, didx);
    } else {
      return d[c.dataIndex];
    }
  }

  // 排序
  function order(sorter) {
    _dataSource.sort(sorter.compare)
    if(isAscOrder){
      setSourceData(_dataSource.slice())
      setOrder(false)
    }else{
      setSourceData(_dataSource.reverse().slice())
      setOrder(true)
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table>
        <thead>
          {type && (
            <input
              type={type}
              checked={selectedRowKeys.length === _dataSource.length}
              disabled={type === "radio"}
              onChange={() => checkedAll(selectedRowKeys)}
              style={{ marginRight: 10 }}
            />
          )}
          {columns.map(c => {
            return (
              <th key={c.key}>
                {c.title} &nbsp;
                {c && c.sorter instanceof Object ? (
                  <span onClick={() => order(c.sorter)} style={{cursor:'pointer'}}> 
                     {isAscOrder? '^' : 'v'}
                     {()=>order(c.sorter)}
                  </span>
                ) : (
                  ""
                )}
              </th>
            );
          })}
        </thead>
        <tbody>
          {_dataSource.map((d, didx) => {
            return (
              <tr key={d.key}>
                {type && (
                  <input
                    type={type}
                    checked={selectedRowKeys.includes(
                      rowKey ? +d[rowKey] : didx
                    )}
                    onChange={() => onSelectChange(rowKey ? +d[rowKey] : didx)}
                    name="radio"
                    style={{ marginRight: 10 }}
                  />
                )}
                {columns.map(c => (
                  <td key={didx}>{renderSource(c, d, didx)}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RTable;
