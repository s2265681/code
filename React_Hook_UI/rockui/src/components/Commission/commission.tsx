

import React from "react";
import classNames from "classnames";

  interface CommissionProps {
    className?: string;
    dataSource:Array<any>,
    theme:'primary'|'info'|'warning'|'danger',
  }
  let key:number = 0;

  const Commission:React.FC<CommissionProps>=(props)=>{
     const {className,theme,dataSource,...restProps} = props;
     const classes = classNames("commission",className,{
         [`commission-${theme}`]:theme
     })
     console.log(dataSource,'dataSource>>>');
     const renderTree = (dataSource: any[]) =>{
           if(dataSource instanceof Array){
           return dataSource.map((item,index)=>{
                key++
                return(
                    <div className="info-wrapper" key={key}>
                         <div  style={{backgroundColor:item.isDone?'#b7eb8f':'dc3545'}} className="dot-radio"/>
                         <div  className="info">
                                <div className="title">
                                   {item.title}
                                </div>
                                <div className="content">
                                    {item.content}
                                </div>
                            </div>
                            {renderTree(item.children)}
                    </div>)
            })
        }
     }
     return(
         <div className={classes} {...restProps}>
              {renderTree(dataSource)}
         </div>
     )
  }

  Commission.defaultProps={
    theme:"primary",

  }

  export default Commission;