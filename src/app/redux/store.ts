import { configureStore } from '@reduxjs/toolkit';
import { myShowsApi } from './api/myshows.service';
import { itemsPerPageReducer } from './slices/items-per-page-slice';
import { loadingDetailsFlagReducer } from './slices/loading-details-flag-slice';
import { loadingListFlagReducer } from './slices/loading-list-flag-slice';
import { searchValueReducer } from './slices/search-value-slice';

export const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    itemsPerPage: itemsPerPageReducer,
    [myShowsApi.reducerPath]: myShowsApi.reducer,
    loadingListFlag: loadingListFlagReducer,
    loadingDetailsFlag: loadingDetailsFlagReducer,
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
