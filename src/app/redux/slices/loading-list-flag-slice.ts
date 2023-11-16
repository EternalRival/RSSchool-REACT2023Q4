import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = { value: boolean };

const initialState = (): State => ({ value: false });

const { actions, reducer } = createSlice({
  name: 'loadingListFlag',
  initialState,
  reducers: {
    setIsListLoading(state, { payload }: PayloadAction<boolean>) {
      state.value = payload;
    },
  },
});

export const loadingListFlagReducer = reducer;

export const { setIsListLoading } = actions;
