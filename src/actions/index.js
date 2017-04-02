"use strict";
var CounterActions = (function () {
    function CounterActions() {
    }
    CounterActions.prototype.increment = function () {
        return {
            type: CounterActions.INCREMENT
        };
    };
    CounterActions.prototype.decrement = function () {
        return {
            type: CounterActions.DECREMENT
        };
    };
    CounterActions.INCREMENT = 'INCREMENT';
    CounterActions.DECREMENT = 'DECREMENT';
    return CounterActions;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CounterActions;
//# sourceMappingURL=index.js.map