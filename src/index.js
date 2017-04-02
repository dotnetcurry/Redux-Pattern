"use strict";
var redux_1 = require('redux');
var reducers_1 = require('./reducers');
var index_1 = require("./actions/index");
var store = redux_1.createStore(reducers_1.default);
var counterActions = new index_1.default();
console.log(store.getState());
store.dispatch(counterActions.increment());
console.log(store.getState());
store.dispatch(counterActions.increment());
console.log(store.getState());
store.dispatch(counterActions.decrement());
console.log(store.getState());
//# sourceMappingURL=index.js.map