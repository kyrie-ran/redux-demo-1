import store from "./store/index.js";
import {addAction,subAction,incAction} from './store/actionCreators.js';

store.subscribe(() => {
    console.log(store.getState());
})



// store.dispatch(addAction(10));
// store.dispatch(addAction(10));
// store.dispatch(subAction(10));
// store.dispatch(incAction(10));


// 函数的基础之上进行优化：修改原有的 dispatch
// const next = store.dispatch;
// function dispatchAndLoggin(action){
//     console.log('dispatch前', action);
//     next(action);
//     console.log('dispatch后', store.getState());
// }
// store.dispatch = dispatchAndLoggin;

// store.dispatch(addAction(10));
// store.dispatch(addAction(10));

// 将之前的操作进行封装
function patchLogging(store){
    const next = store.dispatch;
    function dispatchAndLoggin(action){
        console.log('dispatch前--action', action);
        next(action);
        console.log('dispatch后--store', store.getState());
    }
    // store.dispatch = dispatchAndLoggin;
    return dispatchAndLoggin;
}
// 封装 patchThunk 的功能
function patchThunk(store){
    const next = store.dispatch;
    function dispatchAndThunk(action){
        if(typeof action === "function"){
            action(store.dispatch,store.getState);
        }else {
            next(action);
        }
    }
    // store.dispatch = dispatchAndThunk
    return dispatchAndThunk;
}

patchLogging(store);
patchThunk(store);

// store.dispatch(addAction(10));
// store.dispatch(addAction(10));

// function foo(dispatch,getState){
//     dispatch(subAction(10));
// }
// store.dispatch(foo);

// 封装 applyMiddleware
function applyMiddleware(...middlewares){
    middlewares.forEach(middleware => {
        store.dispatch = middleware(store);
    })
}

applyMiddleware(patchLogging,patchThunk);