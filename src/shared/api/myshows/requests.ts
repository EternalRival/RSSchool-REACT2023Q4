import { apiUrl, defaultLanguage } from '@shared/constants'
import { GetRequestBody } from './types/get-request-body.type'
import { ApiShowSummary } from './types/api-show-summary.type'
import { GetByIdRequestBody } from './types/get-by-id-request-body.type'
import { GetByIdResponseBody } from './types/get-by-id-response-body.type'
import { ParsedUrlQuery } from 'querystring'

export type TVShowListResponse = {
  count: number
  list: ApiShowSummary[]
}

const composeFetchArgs = (body: BodyInit): RequestInit => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': defaultLanguage,
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=359',
    },
    body,
  }
}

export const parseQueryParam = (param: string | string[] | undefined, defaultValue: string): string => {
  if (typeof param === 'undefined') {
    return defaultValue
  }
  if (typeof param === 'string') {
    return param
  }
  if (Array.isArray(param) && param.length > 0 && param.every((value) => typeof value === 'string')) {
    return param[0]
  }
  throw new Error(`Unknown QueryParam type!`)
}

export const fetchList = async ({ params }: { params: GetRequestBody }): Promise<TVShowListResponse> => {
  const body = ['Count', 'Get'].map((method, i) => ({
    jsonrpc: '2.0',
    method: `shows.${method}`,
    params,
    id: i,
  }))

  const fetchArgs = composeFetchArgs(JSON.stringify(body))

  const res = await fetch(apiUrl, fetchArgs)
  const [count, list] = await res.json()

  return {
    count: count.result,
    list: list.result,
  }
}

export const fetchDetailsById = async ({ params }: { params: GetByIdRequestBody }): Promise<GetByIdResponseBody> => {
  const body = {
    jsonrpc: '2.0',
    method: `shows.GetById`,
    params,
    id: 0,
  }

  const fetchArgs = composeFetchArgs(JSON.stringify(body))

  const res = await fetch(apiUrl, fetchArgs)
  const { result } = await res.json()

  return result
}
