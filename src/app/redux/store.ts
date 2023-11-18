import { configureStore } from '@reduxjs/toolkit';
import { myShowsApi } from './api/myshows.service';
import { detailsFlagsReducer } from './slices/details-flags-slice';
import { itemsPerPageReducer } from './slices/items-per-page-slice';
import { listFlagsReducer } from './slices/list-flags-slice';
import { searchValueReducer } from './slices/search-value-slice';

export const store = configureStore({
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

// Search Value        - search submit
// Items per page
// View mode ?
// Loading list flag
// Loading details flag
