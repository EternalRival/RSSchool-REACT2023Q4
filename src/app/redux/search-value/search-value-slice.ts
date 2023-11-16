import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  defaultQueryValue,
  searchQueryLocalStorageKey,
} from 'shared/constants';

type SearchValueState = { value: string };

const initialState = (): SearchValueState => ({
  value: localStorage.getItem(searchQueryLocalStorageKey) ?? defaultQueryValue,
});

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    set(state, { payload }: PayloadAction<string>) {
      localStorage.setItem(searchQueryLocalStorageKey, payload);
      state.value = payload;
    },
  },
});

export const searchValueReducer = searchValueSlice.reducer;

export const { set } = searchValueSlice.actions;
