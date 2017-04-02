import {Action} from "redux";

export default class CounterActions {
    static INCREMENT: string = 'INCREMENT';
    static DECREMENT: string = 'DECREMENT';

    increment(): Action {
        return {
            type: CounterActions.INCREMENT
        };
    }

    decrement(): Action {
        return {
            type: CounterActions.DECREMENT
        };
    }
}
