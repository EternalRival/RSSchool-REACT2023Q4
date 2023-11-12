import { Dispatch, createContext } from 'react';
import {
  defaultQueryValue,
  searchQueryLocalStorageKey,
} from 'shared/constants';
import { Action, State } from './types.type';

const initialSearchValue =
  localStorage.getItem(searchQueryLocalStorageKey) ?? defaultQueryValue;

export const initialState: State = {
  searchInputValue: initialSearchValue,
  searchSubmitValue: initialSearchValue,
  fetchedListData: { count: 0, list: [] },
};

export const SearchInputContext = createContext(initialState.searchInputValue);

export const SearchSubmitContext = createContext(
  initialState.searchSubmitValue
);

export const FetchedListDataContext = createContext(
  initialState.fetchedListData
);

export const StoreDispatchContext = createContext<Dispatch<Action>>(() => {
  throw new Error('Function not implemented.');
});
