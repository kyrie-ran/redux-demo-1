import store from "./store/index.js";
import {addAction,subAction,incAction} from './store/actionCreators.js';

store.subscribe(() => {
    console.log(store.getState());
})



store.dispatch(addAction(10));
store.dispatch(addAction(10));
store.dispatch(subAction(10));
store.dispatch(incAction(10));