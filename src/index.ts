import {createStore} from 'redux';
import counterReducer from './reducers';
import CounterActions from "./actions/index";

const store = createStore(counterReducer);
const counterActions = new CounterActions();

console.log(store.getState());
store.dispatch(counterActions.increment() as any);
console.log(store.getState());
store.dispatch(counterActions.increment() as any);
console.log(store.getState());
store.dispatch(counterActions.decrement() as any);
console.log(store.getState());