import { defaultLanguage } from 'shared/constants';
import { isObject } from 'shared/lib/is-object';
import { Language } from 'shared/types/language.type';
import { isApiShowSummary } from './typeguards/is-api-show-summary.guard';
import { isGetByIdResponseBody } from './typeguards/is-get-by-id-response-body.guard';
import { ApiShowSummary } from './types/api-show-summary.type';
import { GetByIdRequestBody } from './types/get-by-id-request-body.type';
import { GetByIdRequest } from './types/get-by-id-request.type';
import { GetByIdResponseBody } from './types/get-by-id-response-body.type';
import { GetByIdResponse } from './types/get-by-id-response.type';
import { GetRequestBody } from './types/get-request-body.type';
import { GetRequest } from './types/get-request.type';
import { GetResponse } from './types/get-response.type';

const baseUrl = 'https://api.myshows.me/v2/rpc/';

const fetchJson = async <TRequest, TResponse>(
  body: TRequest,
  lang: Language = defaultLanguage,
  signal?: AbortSignal
): Promise<TResponse> => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': lang,
    },
    body: JSON.stringify(body),
    signal,
  });
  return response.json();
};

export type TVShowListResponse = {
  count: number;
  list: ApiShowSummary[];
};

export const isTVShowListResponse = (
  obj: unknown
): obj is TVShowListResponse => {
  if (!isObject(obj)) {
    return false;
  }
  return (
    typeof obj.count === 'number' &&
    Array.isArray(obj.list) &&
    obj.list.every(isApiShowSummary)
  );
};

export const fetchTVShowList = async (
  params: GetRequestBody,
  lang: Language,
  signal?: AbortSignal
): Promise<TVShowListResponse> => {
  type TRequest = [GetRequest, GetRequest];
  type TResponse = [GetResponse<number>, GetResponse<ApiShowSummary[]>];

  const body: TRequest = [
    {
      jsonrpc: '2.0',
      method: 'shows.Count',
      params,
      id: 1,
    },
    {
      jsonrpc: '2.0',
      method: 'shows.Get',
      params,
      id: 2,
    },
  ];

  const [count, list] = await fetchJson<TRequest, TResponse>(
    body,
    lang,
    signal
  );

  if ('error' in count) {
    const { code, message, data } = count.error;
    throw new Error(`[${code}] ${message}: ${data}`);
  }
  if ('error' in list) {
    const { code, message, data } = list.error;
    throw new Error(`[${code}] ${message}: ${data}`);
  }

  const result = {
    count: count.result,
    list: list.result,
  };

  if (!isTVShowListResponse(result)) {
    throw new Error('wrong type from api');
  }

  return result;
};

export const fetchTVShowById = async (
  params: GetByIdRequestBody,
  lang: Language,
  signal?: AbortSignal
): Promise<GetByIdResponseBody> => {
  const body: GetByIdRequest = {
    jsonrpc: '2.0',
    method: 'shows.GetById',
    params,
    id: 1,
  };

  const response = await fetchJson<GetByIdRequest, GetByIdResponse>(
    body,
    lang,
    signal
  );

  if ('error' in response) {
    const { code, message, data } = response.error;
    throw new Error(`[${code}] ${message}: ${data}`);
  }

  if (!isGetByIdResponseBody(response.result)) {
    throw new Error('wrong type from api');
  }

  return response.result;
};
