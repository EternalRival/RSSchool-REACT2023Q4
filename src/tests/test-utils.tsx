import { RenderResult, render } from '@testing-library/react';
import {
  FetchedListDataContext,
  SearchSubmitContext,
  StoreDispatchContext,
  initialState,
} from 'app/store/model/context';
import { Action, State } from 'app/store/model/types.type';
import { Dispatch, FC, ReactNode } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import mockDetailsResponseJson from 'shared/api/myshows/model/mock-details-response.json';
import mockListResponseJson from 'shared/api/myshows/model/mock-list-response.json';
import {
  TVShowListResponse,
  isTVShowListResponse,
} from 'shared/api/myshows/myshows.service';
import { Endpoint } from 'shared/constants';

type AllProvidersProps = {
  children: ReactNode;
  dispatch?: Dispatch<Action>;
} & Partial<State>;

export const MockContextProvider: FC<AllProvidersProps> = ({
  children,
  searchSubmitValue = initialState.searchSubmitValue,
  fetchedListData = initialState.fetchedListData,
  dispatch = (): never => {
    throw new Error('Function not implemented.');
  },
}: AllProvidersProps) => {
  return (
    <SearchSubmitContext.Provider value={searchSubmitValue}>
      <FetchedListDataContext.Provider value={fetchedListData}>
        <StoreDispatchContext.Provider value={dispatch}>
          {children}
        </StoreDispatchContext.Provider>
      </FetchedListDataContext.Provider>
    </SearchSubmitContext.Provider>
  );
};

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

const getValidMockResponse = (json: unknown): TVShowListResponse => {
  if (!isTVShowListResponse(json)) {
    throw new Error('wrong mock type');
  }
  return json;
};

export const mockListResponse = getValidMockResponse({
  count: mockListResponseJson[0].result,
  list: mockListResponseJson[1].result,
});

export const mockListItem = mockListResponse.list[0];

export const mockDetailsResponse = mockDetailsResponseJson;
