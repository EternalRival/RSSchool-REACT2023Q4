import { HttpResponse, delay, http } from 'msw';
import { setupServer } from 'msw/node';
import { apiUrl } from 'shared/constants';
import { isObject } from 'shared/lib/is-object';
import { mockDetailsJson } from './mock-details-response';

export const server = setupServer(
  http.post(apiUrl, async ({ request }) => {
    const req = await request.json();

    if (!isObject(req)) {
      throw new Error('request is not object');
    }

    if (req.method === 'shows.GetById') {
      return HttpResponse.json(mockDetailsJson);
    }
    /* 
    switch (req.method) {
      case 'shows.GetById':
      case 'shows.Count':
      case 'shows.Get':
      default:
    } */
  })
);
