import { defaultQueryValue } from '@shared/constants'
import { mockDetails } from '@tests/mocks/mock-details-response'
import { mockCount, mockList } from '@tests/mocks/mock-list-response'
import { fetchDetailsById, fetchList, parseQueryParam } from './requests'

describe('api/myshows/requests', () => {
  it('parseQueryParam implemented properly', () => {
    expect(parseQueryParam('doctor', '')).toBe('doctor')
    expect(parseQueryParam(['doctor'], '')).toBe('doctor')
    expect(parseQueryParam(undefined, '')).toBe('')
  })

  it('fetchList implemented properly', async () => {
    const actual = await fetchList({ params: { search: { query: defaultQueryValue } } })
    const expected = { count: mockCount, list: mockList }

    expect(actual).toStrictEqual(expected)
  })

  it('fetchDetailsById implemented properly', async () => {
    expect(await fetchDetailsById({ params: { showId: 1 } })).toStrictEqual(mockDetails)
  })
})
