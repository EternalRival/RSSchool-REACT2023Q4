import { ErrorBoundary } from 'features/error-boundary';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { routes } from './router';
import { StoreProvider } from './store';
import { store } from './redux/store';

export const App: FC = () => {
  const errorFallback = <h1>[ErrorBoundary]: App Error :(</h1>;
  const router = createBrowserRouter(routes);

  return (
    <ErrorBoundary fallback={errorFallback}>
      <StoreProvider>
        <Provider store={store}>
          <RouterProvider router={router} />;
        </Provider>
      </StoreProvider>
    </ErrorBoundary>
  );
};
