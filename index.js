const redux = require('redux');

// 这是一个 reducer
function counter(state = 0,action){
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// 创建redux store 来存放应用的状态。
let store = redux.createStore(counter);

// 可以手动订阅更新，也可以事件绑定到视图层
store.subscribe(() => console.log(store.getState()));

// 改变内部 state 惟一方法是 dispatch 一个 action
// action 可以被序列化，用日记记录和存储下来，后期还可以以回放的方式执行
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
