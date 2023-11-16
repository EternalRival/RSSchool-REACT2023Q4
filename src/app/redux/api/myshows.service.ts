import {
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { ApiShowSummary } from 'shared/api/myshows/types/api-show-summary.type';
import { GetByIdRequestBody } from 'shared/api/myshows/types/get-by-id-request-body.type';
import { GetByIdResponseBody } from 'shared/api/myshows/types/get-by-id-response-body.type';
import { GetRequestBody } from 'shared/api/myshows/types/get-request-body.type';
import { Language } from 'shared/types/language.type';

const baseUrl = 'https://api.myshows.me/v2/rpc/';

type GetListByTitleArg = { params: GetRequestBody; lang: Language };
type GetByIdArg = { params: GetByIdRequestBody; lang: Language };
type TVShowListResponse = { count: number; list: ApiShowSummary[] };

const composeFetchArgs = <TRequest>(
  body: TRequest,
  lang: Language
): FetchArgs => {
  return {
    url: '/',
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept-Language': lang },
    body,
  };
};

export const myShowsApi = createApi({
  reducerPath: 'myShowsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getListByTitle: build.query<TVShowListResponse, GetListByTitleArg>({
      query: ({ params, lang }) => {
        const body = ['Count', 'Get'].map((method, i) => ({
          jsonrpc: '2.0',
          method: `shows.${method}`,
          params,
          id: i,
        }));
        return composeFetchArgs(body, lang);
      },
      transformResponse: ([countArgs, listArgs]) => ({
        count: countArgs.result,
        list: listArgs.result,
      }),
    }),

    getById: build.query<GetByIdResponseBody, GetByIdArg>({
      query: ({ params, lang }) => {
        const body = {
          jsonrpc: '2.0',
          method: `shows.GetById`,
          params,
          id: 0,
        };
        return composeFetchArgs(body, lang);
      },
      transformResponse: ({ result }) => result,
    }),
  }),
});

export const { useGetListByTitleQuery, useGetByIdQuery } = myShowsApi;
