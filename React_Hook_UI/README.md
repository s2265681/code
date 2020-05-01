




## 什么是React Hook
- react hook是react16.8带来的全新特性，即将替代class组件的写法
- 没有破坏性改动
- 完全可选
- 百分之百向后兼容，没有计划从React移除class，可以渐进式的尝试使用Hook

## 为什么使用hooks，解决了什么问题
1、解决了组件很难复用状态逻辑
2、复杂组件难以理解，尤其是生命周期函数，容易造成逻辑不一致，不清晰
3、React组件一直是函数，使用Hook完全拥抱函数

## React-Hooks
是什么？特殊的函数
什么时候使用useState Hook？
下面实现一个点赞组件
```js
import React,{useState} = 
const LikeButton : React.FC = () => {
    const [obj,setLikeObj] = useState({like:0,on:true});
    return(
        <>
        <button onClick={()=>setLike({like: obj.like+1, on:obj.on})}>
            {like} 👍
        </button>
         <button onClick={()=>setLike({like: obj.like+1, on:!obj.on})}>
           {obj.on? "ON":"OFF"}
        </button>
        </>
    ) 
}
export default LikeButton;
```