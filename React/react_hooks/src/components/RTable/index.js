import React from 'react'

 function RTable({dataSource=[],columns=[],rowSelection={}}) {
     const {type="",selectedRowKeys,onChange} = rowSelection;

     // 每一个选中时
     function onSelectChange(Keys){
        if(selectedRowKeys.includes(Keys)){
            selectedRowKeys.splice(selectedRowKeys.findIndex(e=>e===Keys),1)
        }else{
          selectedRowKeys.push(Keys)
        }
        type==='checkbox' ? onChange(selectedRowKeys.slice()) : onChange([Keys])
      }

     // 全部选中时
     function checkedAll(currentKeys){
          if(currentKeys.length!==dataSource.length){
            let keys = []
            dataSource.map(e=>keys.push(+e.key))
            onChange(keys.slice())
          }else{
            onChange([])
          }
          
      }
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <table>
                <thead>
                  {type&&
                         <input 
                          type={type} 
                          checked={selectedRowKeys.length === dataSource.length }
                          disabled={ type==='radio'}
                          onChange={()=>checkedAll(selectedRowKeys)}
                          style={{marginRight:10}}
                    />}
                  {columns.map(c=><th key={c.key}>{c.title}</th>)}
                </thead>
                <tbody>
                {dataSource.map(d=>{
                   return (
                        <tr key={d.key}>
                        {type&&
                            <input 
                                type={type} 
                                checked={selectedRowKeys.includes(+d.key)}
                                onChange={()=>onSelectChange(+d.key)}
                                name="radio"
                                style={{marginRight:10}}
                            />}
                        {columns.map(c=><td key={d.key}>{d[c.dataIndex]}</td>)}
                        </tr>
                       )
                   })
                }
                </tbody>
            </table>
        </div>
    )
}

export default RTable;

