import { createSlice } from '@reduxjs/toolkit';
import { CommonState } from './types';

const initialState: CommonState = {
  introShown: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    updateIntro: (state: CommonState) => {
      state.introShown = true;
    }
  }
});

export const { updateIntro } = commonSlice.actions;
export const { reducer: commonReducer } = commonSlice;
