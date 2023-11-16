import { RenderResult, render } from '@testing-library/react';
import { ReactNode } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { Endpoint } from 'shared/constants';

type RouterOpts = Parameters<typeof createMemoryRouter>[1];

export const renderWithRouter = (
  element: ReactNode,
  opts?: RouterOpts,
  path = Endpoint.ROOT
): RenderResult => {
  const router = createMemoryRouter([{ path, element }], opts);
  return render(<RouterProvider router={router} />);
};

export const renderWithNestedRouter = (
  element: ReactNode,
  children: ReactNode,
  opts?: Parameters<typeof createMemoryRouter>[1],
  path: string = Endpoint.ROOT,
  subPath: string = Endpoint.DETAILS
): RenderResult => {
  const router = createMemoryRouter(
    [{ path, element, children: [{ path: subPath, element: children }] }],
    opts
  );
  return render(<RouterProvider router={router} />);
};
