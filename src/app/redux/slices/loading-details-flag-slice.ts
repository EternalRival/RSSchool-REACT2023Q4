import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = { value: boolean };

const initialState = (): State => ({ value: false });

const { actions, reducer } = createSlice({
  name: 'loadingDetailsFlag',
  initialState,
  reducers: {
    setIsLoadingDetails(state, { payload }: PayloadAction<boolean>) {
      state.value = payload;
    },
  },
});

export const loadingDetailsFlagReducer = reducer;

export const { setIsLoadingDetails } = actions;
