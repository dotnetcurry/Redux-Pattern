import CounterActions from "../actions/index";

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CounterActions.INCREMENT:
            return state + 1;
        case CounterActions.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

