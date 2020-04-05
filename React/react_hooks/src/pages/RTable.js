
import React,{useState,useEffect} from 'react';
import RTable from '../components/RTable/index'


const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    sorter: {
      compare: (a, b) => a.age - b.age
    },
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    render(t, r ,i){
      // console.log(t,r,i)
      return <span style={{color:'#f00'}}>{t===1?'蔬菜':t===2?"水果":"主食"}</span>
    }
  },
];

const dataSource = [
    {
      id: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
      type:1
    },
    {
      id: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
      type:2
    },
    {
      id: '3',
      name: '王祖蓝',
      age: 22,
      address: '西湖区湖底公园1号',
      type:3
    },
  ];
  
  
const Index = ()=> {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [selectedRowKeys,setSelectKeys] = useState([]);
  
  // 每次selectionType变化时候,清空selectedRowKeys
  useEffect(() => {
    setSelectKeys([])
  }, [selectionType])


  console.log('chooseKey', selectedRowKeys)
    return(
        <div>
           <br/>
           <div>
              <button onClick={()=>setSelectionType('checkbox')}>checkbox</button>
              <button onClick={()=>setSelectionType('radio')}>radio</button>
              <button onClick={()=>setSelectionType()}>无</button><br/>
           </div>
           <br/>

           <RTable 
               dataSource={dataSource} 
               columns={columns} 
               rowSelection={{
                 type : selectionType,
                 selectedRowKeys,
                 rowKey:'id',
                 onChange:(selectedRowKeys)=> setSelectKeys(selectedRowKeys)
               }}
            />
        </div>
    )
}


export default Index;

