import { mockDetailsJson } from '@shared/api/myshows/mocks/mock-details-response'
import { mockListJson } from '@shared/api/myshows/mocks/mock-list-response'
import { apiUrl } from '@shared/constants'
import { isObject } from '@shared/lib/is-object'
import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node'

export const server = setupServer(
  http.post(apiUrl, async ({ request }) => {
    const req = await request.json()

    if (!isObject(req)) {
      throw new Error('request is not object')
    }

    if (req.method === 'shows.GetById') {
      return HttpResponse.json(mockDetailsJson)
    }

    if (Array.isArray(req) && req[0].method === 'shows.Count' && req[1].method === 'shows.Get') {
      return HttpResponse.json(mockListJson)
    }

    return HttpResponse.error()
  }),
)
