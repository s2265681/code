
const initState = {
    count : 1
}

export const reducer =(action,state=initState)=>{
    console.log('type')
    switch(action.type){
            case 'add':
               return {
                ...state,
                count:initState.count+1
              }
            break;
            default :
            console.log('111')
            return initState 
        }

}