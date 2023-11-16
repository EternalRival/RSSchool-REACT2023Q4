import { configureStore } from '@reduxjs/toolkit';
import { searchValueReducer } from './search-value/search-value-slice';

export const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
  },
});

// Search Value        - search submit
// Items per page
// View mode ?
// Loading list flag
// Loading details flag

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
