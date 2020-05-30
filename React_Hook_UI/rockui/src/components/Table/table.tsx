import React, { useState, useEffect, ReactElement } from "react";
import classNames from "classnames";
import Spin from '../Spin';
import Icon from '../Icon/icon';
import _ from 'lodash'

interface RowSelection {
  type?: "radio" | "checkbox" | "";
  selectedRowKeys?: Array<any>;
  onChange?: (key: any) => void;
  rowKey?: string;
  rowChoosed?: boolean;
}

interface ExpandableProps{
    /**必填，自定义展开行内容*/ 
    expandedRowRender: (record: any) => ReactElement;
    /**展开事件*/ 
    onExpand?: (record: any) => void;
    /* 过滤这是不可展开的条件, 默认全部可展开 */
    rowExpandable?: (record: any) => boolean;
    /**设置单一展开，还是全部可展开, 默认为true*/
    isSingExped?:boolean;
}

interface TableProps {
  dataSource: Array<any>;
  columns: Array<any>;
  rowSelection?: RowSelection;
  borderd?: boolean;
  loading?: boolean;
  isTheme?: string;
  expandable?:ExpandableProps;
  scroll?: {
    x?: number | string;
    y?: number | string;
  };
  className?:any
}

const Table: React.FC<TableProps> = (props) => {
  const {
    dataSource,
    columns,
    rowSelection = {},
    borderd,
    loading,
    isTheme,
    expandable,
    scroll = {},
    className
  } = props;
  const {
    type = "",
    selectedRowKeys = [],
    onChange,
    rowKey = "",
    rowChoosed = false,
  } = rowSelection;
  const expandedRowRender = expandable&&expandable.expandedRowRender;
  const onExpand = expandable?.onExpand
  const rowExpandable = expandable?.rowExpandable ? expandable?.rowExpandable: ()=>true;
  const isSingExped = (expandable?.isSingExped === undefined || expandable?.isSingExped) ? true : false;

  // 数据管理
  const [_dataSource, setSourceData] = useState(dataSource);
  // 设置排序
  const [isAscOrder, setOrder] = useState(false);
  // 设置鼠标滑入变色
  const [isColorIndex, getColor] = useState<number>(0);
  // 设置展开值
  let [isExpend, setIsExpend] = useState<any>({});
  // 设置选中的key
  const [selectedKeys, setSelectKeys] = useState(selectedRowKeys || []);
  // 设置行选中
  // const [isRowChoosed,setIsRowChoosed] = useState(false)

  // 初始化
  useEffect(() => {
    {
      columns.map((c) => c && c.sorter instanceof Object && order(c.sorter));
        // setIsRowChoosed(false)
    }

  }, []);

  useEffect(() => {
    setSourceData(dataSource);
  }, [dataSource]);

  // 渲染cloumn
  const renderCloumn = () => {
    return columns.map(({ width = 120, title, sorter, key }) => {
      return (
        <th key={key} style={{ width }}>
          {title} &nbsp;
          {sorter instanceof Object ? (
            <span onClick={() => order(sorter)} style={{ cursor: "pointer" }}>
              {isAscOrder ? 
                <Icon icon="arrow-circle-up"/>:
                <Icon icon="arrow-circle-down"/>
              }
              {() => order(sorter)}
            </span>
          ) : (
            ""
          )}
        </th>
      );
    });
  };

  // 渲染Loading
  const renderLoading = () => {
    return loading && <Spin delay={1000} loading/>;
  };

  // 排序
  function order(sorter: {
    compare: ((a: any, b: any) => number) | undefined;
  }) {
    _dataSource.sort(sorter.compare);
    if (isAscOrder) {
      setSourceData(_dataSource.slice());
      setOrder(false);
    } else {
      setSourceData(_dataSource.reverse().slice());
      setOrder(true);
    }
  }

  // 每一个选中时
  function onSelectChange(Keys: number) {
    if (selectedKeys.includes(Keys)) {
      selectedKeys.splice(
        selectedKeys.findIndex((e) => e === Keys),
        1
      );
    } else {
      selectedKeys.push(+Keys);
    }
    type === "checkbox"
      ? setSelectKeys(selectedKeys.slice())
      : setSelectKeys([Keys]);
    type === "checkbox"
      ? onChange && onChange(selectedKeys.slice())
      : onChange && onChange([Keys]);
  }

  // 展开行配置 必须搭配rowSelection.rowKey否则按index删除的时候会有问题
  function _onExpand(key: number) {
    let singExped:any = {}
    if (isExpend[key]) {
      isExpend[key] = false;
    } else{
      // 设置单一展开，还是全部可展开
       if(isSingExped){
        singExped[key] = true 
        isExpend = singExped
       }else{
        isExpend[key] = true;
       }
    }
    setIsExpend(_.cloneDeep(isExpend));
    onExpand&&onExpand(key);
  }

  // 自定义render渲染
  function renderSource(
    c: {
      render: (arg0: any, arg1: any, arg2: any) => any;
      dataIndex: string | number;
    },
    d: { [x: string]: any },
    didx: number
  ) {
    if (typeof c.render === "function") {
      return c.render(d[c.dataIndex], d, didx);
    } else {
      return d[c.dataIndex];
    }
  }

  // 设置头部类型
  const renderCloumnsTitle = () => {
    return (
      type && (
        <input
          type={type}
          checked={selectedKeys.length === _dataSource.length}
          disabled={type === "radio"}
          onChange={() => checkedAll(selectedKeys)}
          className="chooselable"
          style={{
            visibility: type === "radio" ? 'hidden' : 'visible'
          }}
        />
      )
    );
  };

 
  // 设置身体头部类型
  const renderBodyTitle = (rowKeyOrIndex: number) => {
    return (
      type && (
        <input
          type={type}
          checked={selectedKeys.includes(rowKeyOrIndex)}
          onChange={() => onSelectChange(rowKeyOrIndex)}
          name="radio"
          id={`check+${rowKeyOrIndex}`}
          className="chooselable"
        />
      )
    );
  };

   // 全部选中时
   function checkedAll(currentKeys: string | any[]) {
    if (currentKeys.length !== _dataSource.length) {
      let keys: number[] = [];
      _dataSource.map((e, i) => keys.push(rowKey ? +e[rowKey] : i));
      onChange && onChange(keys.slice());
      setSelectKeys(keys.slice());
    } else {
      setSelectKeys([]);
      onChange && onChange([]);
    }
  }


  // 设置展开占位
  const isExpandable = () => {
    return (
      expandable && (
        <span className="expandIcon">
        </span>
      )
    );
  };

  // 展开行头部信息
 const renderExpandIcon =(rowKeyOrIndex: number,d: any)=>{
  return expandable && (
    <span 
      className="expandIcon"
      onClick={() => rowExpandable(d) && _onExpand(rowKeyOrIndex)}
    >
     {rowExpandable(d) &&
        (isExpend[rowKeyOrIndex] ?
           <Icon icon="minus-circle" style={{margin:'0 5px'}}/>:
           <Icon icon="plus-circle" style={{margin:'0 5px'}}/>
           )
      }
    </span>
  )
 }

 // 展开行内容部分
  const renderExpandContent = (rowKeyOrIndex: number, d: any) => {
    return (
      expandable &&
      expandable && 
      isExpend[rowKeyOrIndex] && (
        <tr  className="expendContent">
          <td  colSpan={Number(columns.length) + 1}>
            {expandedRowRender&&expandedRowRender(d)}
          </td>
        </tr>
      )
    );
  };



  const tableclasses = classNames("table-container", className, {
    "table-borderd": borderd,
    "table-loading": loading
  });

  return (
    <div style={{filter: isTheme}} className="table-wrapper">
      <table className={tableclasses}>
        <thead className ="t_thead">
          <tr className="t_tr">
            {/* 设置有展开占位 */}
            {isExpandable()}
            {/* 设置头部类型type */}
            {renderCloumnsTitle()}
            {/* 设置table的columns */}
            {renderCloumn()}
          </tr>
        </thead>
        <div className="tbody_wrapper" style={{ maxHeight: scroll.y, maxWidth: scroll.x}}>
          <tbody className="t_tbody">
            {_dataSource.map((d, didx) => {
              const dRowKey = +d[rowKey];
              const rowKeyOrIndex = rowKey ? dRowKey : didx;
              return (
                <>
                  <label
                    htmlFor={rowChoosed ? `check+${rowKeyOrIndex}` : ""}
                    key={d.key}
                  >
                    <tr
                      className="t_tr"
                      style={{background: isColorIndex === didx ? "#eee" : "",cursor: type ? "pointer" : ""}}
                      onMouseOver={() => getColor(didx)}
                      onMouseOut={() => getColor(-1)}
                    >

                  {/* 展开行图标，过滤条件展开 */}
                  {renderExpandIcon(rowKeyOrIndex,d)}
                  {/* 设置表格头部类型 */}
                  {renderBodyTitle(rowKeyOrIndex)}
                      {columns.map((c) => (
                          <td style={{ width: (c && c.width) || 120 }}>
                              {renderSource(c, d, didx)}
                            </td>
                      ))}
                    </tr>
                  </label>
                  {/* 设置展开行的内容 */}
                  {renderExpandContent(rowKeyOrIndex, d)}
                </>
              );
            })}
               
          </tbody>
        </div>
        {/* Loading */}
        {renderLoading()}
      </table>
   
    </div>
  );
};

Table.defaultProps = {
  rowSelection: {},
  borderd: false,
  loading: false,
  isTheme: "",
};
export default Table;
