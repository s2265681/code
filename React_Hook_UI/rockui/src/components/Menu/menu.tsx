import React,{createContext,useState, Children, ReactChild} from "react";
import classNames from "classnames";
import {MenuItemProps} from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex:number) => void;

export const MenuContext = createContext<IMenuContext>({index:0})

export interface MenuProps{
    defaultIndex?:number;
    className?:string;
    mode?:MenuMode;
    style?:React.CSSProperties;
    onSelect?:SelectCallback
}

interface IMenuContext{
    index:number;
    onSelect?:SelectCallback;
    mode?:MenuMode;
}
const Menu:React.FC<MenuProps>=(props)=>{
   const {defaultIndex,className,mode,style,children,onSelect} = props;
   const [currentActive,setActive] = useState(defaultIndex)
   
   const classes = classNames('menu',className,{
       'menu-vertical':mode === 'vertical',
       'menu-horizontal':mode !== 'vertical'
   })
   
   const handleClick = (index:number) =>{
      setActive(index)
      if(onSelect)onSelect(index)
   }

   const passedContext:IMenuContext={
       index:currentActive||0,
       onSelect:handleClick,
       mode:mode
   }


const renderChildren=()=>{
    return React.Children.map(children ,(child,index)=>{
        // 类型断言，转成FunctionComponentElement
        const childElement = child as React.FunctionComponentElement<MenuItemProps>
        // childElement.type.displayName
        const {displayName} =  childElement.type
        if(displayName==='MenuItem'||displayName==='SubMenu'){
            // return child
            return React.cloneElement(childElement,{
                index
            })
        }else{
            console.error('Warning:Menu has a child which is not a MenuItem component');
        }
    })
 }
   return (
       <ul className={classes} style={style} data-testid="test-menu">
         <MenuContext.Provider value={passedContext}>
            {renderChildren()}
          </MenuContext.Provider>
       </ul>
   )
}
Menu.defaultProps={
    defaultIndex:0,
    mode:'horizontal'
}

export default Menu;