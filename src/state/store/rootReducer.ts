import { combineReducers } from '@reduxjs/toolkit';
import { commonReducer } from '../reducers/common';
import { watchListReducer } from '../reducers/watchlist';

const rootReducer = combineReducers({
  watchlist: watchListReducer,
  common: commonReducer,
});

export default rootReducer;