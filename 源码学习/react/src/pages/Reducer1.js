import React, { Component } from 'react'
import {store} from '../redux/store'
store.dispatch({type:'add'})
console.log(store.getState(),'store')

export default class Reducer1 extends Component {
    render() {
        return (
            <div>
                Reducer1
            </div>
        )
    }
}
