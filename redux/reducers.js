import { combineReducers } from 'redux';

import textsReducer from "./textsReducer";

let combinedReducer=combineReducers({
    // редьюсер countersReducer отвечает за раздел state под именем counters
    texts: textsReducer,
    // + другие редьюсеры
});

export default combinedReducer;