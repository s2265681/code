

export const createStore = (reducer)=>{
    let currentState = {};
    let observers = []

  
      // get 
      function getState(){
        return currentState;
     }


    // set    执行事件
    function dispatch(action,currentState){
        //  { count:2 }
        currentState = reducer(action,currentState) 
        // currentState = {count:0}
   
        // switch(action.type){
        //     case 'add':
        //        currentState = {
        //             ...currentState,
        //             count:initSate.count+1
        //         }
        //     break;
        //     default :
        //     console.log('111')
        //     return currentState = 122
        // }
        observers.forEach(fn=>fn)
    }

    // subscript  观察者
    function subscript(fn){
        observers.push(fn)
    }
    dispatch({type:'%rdtdt'})
    return { getState , dispatch , subscript}
}