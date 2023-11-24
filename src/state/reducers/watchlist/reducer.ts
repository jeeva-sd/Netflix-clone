import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WatchList } from './types';

const initialState: WatchList = {
  loading: false,
  movieList: [],
};

const watchListSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addList: (state: WatchList, action: PayloadAction) => {
      state.movieList = [...state.movieList, action.payload];
    },
    removeList: (state: WatchList, action: PayloadAction) => {
      state.movieList = state.movieList.filter((e: any) => e !== action.payload);
    }
  }
});

export const { addList, removeList } = watchListSlice.actions;
export const { reducer: watchListReducer } = watchListSlice;
