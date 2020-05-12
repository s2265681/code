import React,{InputHTMLAttributes,FC,ReactNode} from 'react';
import classNames from 'classnames'

interface InputProps{
   /** 禁用 */
   disabled?:boolean;
   /** 前缀 */
   addonBefore?:string|ReactNode	
   /** 后置标签 */
   addonAfter?:string|ReactNode	
   /** 后置 */
   suffix?:string|ReactNode
   /** className */
   className?: string;
}


const Input:FC<InputProps> = (props)=> {
    const {disabled,addonBefore,addonAfter,suffix,className , ...restProps} = props
    // classes
    const classess = classNames("input",className,{
        [`input-${disabled}`]:disabled
    })
    
    return <input className={className} disabled={disabled}  {...restProps}></input>
}

Input.defaultProps={
    disabled:false
}

export default Input;