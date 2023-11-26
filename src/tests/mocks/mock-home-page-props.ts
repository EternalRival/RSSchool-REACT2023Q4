import { pageParamName, pageSizeParamName, queryParamName } from '@shared/constants'
import { mockList } from './mock-list-response'
import { TVShowListResponse } from '@shared/api/myshows/requests'
import { GetByIdResponseBody } from '@shared/api/myshows/types/get-by-id-response-body.type'
import { HomeProps } from '@pages/index.page'

type Props = {
  search?: string
  page?: number
  pageSize?: number
  cardListData?: TVShowListResponse
  detailedCardData?: GetByIdResponseBody | null
}

const defaultProps = {
  search: '',
  page: 1,
  pageSize: 30,
  cardListData: { count: 10, list: mockList },
  detailedCardData: null,
}

export const createMockHomePageProps = ({
  search = defaultProps.search,
  page = defaultProps.page,
  pageSize = defaultProps.pageSize,
  cardListData = defaultProps.cardListData,
  detailedCardData = defaultProps.detailedCardData,
}: Props = defaultProps): HomeProps => ({
  searchParamsData: { [queryParamName]: search, [pageParamName]: page, [pageSizeParamName]: pageSize },
  cardListData,
  detailedCardData,
})
