import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  defaultQueryValue,
  searchQueryLocalStorageKey,
} from 'shared/constants';

type State = { value: string };

const initialState = (): State => ({
  value: localStorage.getItem(searchQueryLocalStorageKey) ?? defaultQueryValue,
});

const { actions, reducer } = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue(state, { payload }: PayloadAction<string>) {
      localStorage.setItem(searchQueryLocalStorageKey, payload);
      state.value = payload;
    },
  },
});

export const searchValueReducer = reducer;

export const { setSearchValue } = actions;
