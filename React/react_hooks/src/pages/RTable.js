
import React,{useState,useEffect} from 'react';
import RTable from '../components/RTable/index'

const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
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
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
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
                 onChange:(selectedRowKeys)=> setSelectKeys(selectedRowKeys)
               }}
               
            />
        </div>
    )
}


export default Index;

