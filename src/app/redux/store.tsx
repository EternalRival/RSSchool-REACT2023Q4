import { configureStore } from '@reduxjs/toolkit';
import { myShowsApi } from './api/myshows.service';
import { detailsFlagsReducer } from './slices/details-flags-slice';
import { itemsPerPageReducer } from './slices/items-per-page-slice';
import { listFlagsReducer } from './slices/list-flags-slice';
import { searchValueReducer } from './slices/search-value-slice';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    itemsPerPage: itemsPerPageReducer,
    [myShowsApi.reducerPath]: myShowsApi.reducer,
    listFlags: listFlagsReducer,
    detailsFlags: detailsFlagsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myShowsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
