

import React,{useState} from "react";
import classNames from "classnames";
import Icon from '../Icon'
import _ from 'lodash'
  interface dataProps{
    /**id为唯一标示，必须为唯一值 */
    id:number,
    /**title标题文字*/
    title:string|React.ReactElement|undefined,
    /**内容部分*/
    content?:string|React.ReactElement|undefined,
    /**下一级的内容*/
    children?:Array<dataProps>
  }

  interface CommissionProps {
    className?: string;
    /**传入树状数据结构，必填 */
    dataSource:Array<dataProps>,
     /**设置主题颜色 */
    theme?:'primary'|'info'|'warning'|'danger',
    /**设置是否具有操作功能 */
    isHandle?:boolean,
     /**设置是否具有展开收起功能*/
    isExpand?:boolean,
    /**操作节点后的事件，将返回当前数据和操作后的结构\
     * e,itemId,_newData
    */
    onChange?:(e:React.MouseEvent,itemId:number,index:number)=>void
  }
  
  let key:number = 0;

  /**
   * 
   * @param props  dataSource | theme | isHandle | isExpand
   */
  const Commission:React.FC<CommissionProps>=(props)=>{
     const {className,theme,dataSource,isHandle,onChange,isExpand,...restProps} = props;
     const [_dataSource,setDate] = useState(dataSource)
     const [currentId,setCurrentId] =useState<number>();
     const [clickCurrentId,setClickCurrentId] =useState<number>();

     const classes = classNames("commission",className,{
         [`commission-${theme}`]:theme
     })
     // 更改代办事项状态
     const radioChange=(e: React.MouseEvent<Element, MouseEvent>,itemId: number,index: number)=>{
        // 阻止事件冒泡
        e.stopPropagation();
        const _newData = changeEveryVal(itemId,_.cloneDeep(_dataSource),'RadioChange')
        onChange&&onChange(e,itemId,_newData)
        setDate(_newData)
     }
     // 删除代办项
     const deleteCurrentItem=(e: React.MouseEvent<Element, MouseEvent>,itemId: number,index: number)=>{
        // 阻止事件冒泡捕获
        e.stopPropagation();
        const _newData = changeEveryVal(itemId,_.cloneDeep(_dataSource),"deleteItem")
        onChange&&onChange(e,itemId,_newData)
        setDate(_newData)
     }
     // 是否显示title中的content
     const handleShowContent=(e: React.MouseEvent<Element, MouseEvent>,itemId: number,index: number)=>{
      const _newData = changeEveryVal(itemId,_.cloneDeep(_dataSource),"isExtend")
      setDate(_newData)
   }

   const handleClick=(e: React.MouseEvent<Element, MouseEvent>,itemId:number,index: number)=>{
      if(clickCurrentId===itemId){
         setClickCurrentId(-1)
      }else{
       setClickCurrentId(itemId)
      }
      handleShowContent(e,itemId,index)
   }

     // 操作数组
     const changeEveryVal=(id: number,arr:any,type:string)=>{
         for(let i=0;i<arr.length;i++){
             if(arr[i].children instanceof Array){
                changeEveryVal(id,arr[i].children,type)
             }
             if(arr[i].id === id && type === "RadioChange" ){
                arr[i].isDone = !arr[i].isDone;
             }
             if(arr[i].id === id && type === "isExtend" ){
               arr[i].isContent = !arr[i].isContent;
            }
             if(arr[i].id === id && type === "deleteItem" ){
                 arr.splice(i,1)
             }
         }
       return arr
     }

     const handleMouse=(id:number)=>{
        setCurrentId(id)
     }

     const renderTree = (dataSource: any[]) =>{
           if(dataSource instanceof Array){
           return dataSource.map((item,index)=>{
                key++
                const rdsBgcolor = !item.isDone?'#dc3545':'#20c997'
                return(
                    <div className="info-wrapper" key={key}>
                         <div 
                         style={{backgroundColor:item.isDone!==undefined?rdsBgcolor:''}}
                         className="dot-radio"
                         onMouseOver={()=>handleMouse(item.id)}
                         onMouseLeave={()=>handleMouse(-1)}
                         onClick={(e)=>handleClick(e,item.id,index)}
                         >
                            {isExpand&&clickCurrentId===item.id?
                              <Icon icon="chevron-up" size="1x"></Icon>
                              :isExpand&&clickCurrentId!==item.id?
                              <Icon icon="chevron-down" size="1x"></Icon>
                              :''
                           }
                            {(!isExpand && isHandle&&currentId===item.id)&& <div key={item.id}>
                                <input type="radio"  key={item.id} checked={item.isDone} onClick={e=>radioChange&&radioChange(e,item.id,index)}/>
                                <div className="delete-icon" onClick={(e)=>deleteCurrentItem(e,item.id,index)}><Icon icon="minus-circle" size="1x"></Icon></div>
                                </div>
                            }
                         </div>
                         <div className="info">
                                <div className="title">
                                   {item.title}
                                </div>
                                {/**控制是否展示content */}
                                {!item.isContent&&<div className="content">
                                    {item.content}
                                </div>}
                            </div>
                            {renderTree(item.children)}
                    </div>)
            })
        }
     }
     return(
         <div className={classes} {...restProps}>
              {renderTree(_dataSource)}
         </div>
     )
  }

  Commission.defaultProps={
    theme:"primary",

  }

  export default Commission;