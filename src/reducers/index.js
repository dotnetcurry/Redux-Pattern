"use strict";
var index_1 = require("../actions/index");
var INITIAL_STATE = 0;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case index_1.default.INCREMENT:
            return state + 1;
        case index_1.default.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};
//# sourceMappingURL=index.js.map