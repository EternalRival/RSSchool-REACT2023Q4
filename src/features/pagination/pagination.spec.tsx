import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StoreProvider } from 'app/redux/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Endpoint, pageParamName } from 'shared/constants';
import { describe, expect, it } from 'vitest';
import { BottomSection } from 'widgets/bottom-section';

describe('Pagination', () => {
  const user = userEvent.setup();
  const getPageParam = (): string => {
    return new URLSearchParams(location.search).get(pageParamName) ?? '';
  };

  it('Make sure the component updates URL query parameter when page changes', async () => {
    render(
      <StoreProvider>
        <RouterProvider
          router={createBrowserRouter([
            { path: Endpoint.ROOT, element: <BottomSection /> },
          ])}
        />
      </StoreProvider>
    );

    const initialPage = getPageParam();
    expect(initialPage).toSatisfy<string>((value) => ['', '1'].includes(value));

    for (let i = 2; i <= 10; i += 1) {
      await user.click(await screen.findByLabelText('go to next'));
      expect(getPageParam()).toBe(i.toString());
    }
  });
});
