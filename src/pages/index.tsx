import { DetailedCard } from '@entities/detailed-card'
import { CardList } from '@features/card-list'
import { ErrorThrowingButton } from '@features/error-throwing-button'
import { Pagination } from '@features/pagination'
import { Search } from '@features/search'
import { TVShowListResponse, fetchDetailsById, fetchList, parseQueryParam } from '@shared/api/myshows/requests'
import { GetByIdResponseBody } from '@shared/api/myshows/types/get-by-id-response-body.type'
import {
  defaultDetailsValue,
  defaultPageSizeValue,
  defaultPageValue,
  defaultQueryValue,
  detailsParamName,
  pageParamName,
  pageSizeParamName,
  queryParamName,
} from '@shared/constants'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'

type Props = {
  searchParamsData: {
    [queryParamName]: string
    [pageParamName]: number
    [pageSizeParamName]: number
  }
  cardListData: TVShowListResponse
  detailedCardData: GetByIdResponseBody | null
}
export const getServerSideProps: GetServerSideProps = async ({ query, res }): Promise<{ props: Props }> => {
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=359')

  const search = parseQueryParam(query[queryParamName], defaultQueryValue)
  const page = +parseQueryParam(query[pageParamName], defaultPageValue)
  const pageSize = +parseQueryParam(query[pageSizeParamName], defaultPageSizeValue)

  return {
    props: {
      searchParamsData: {
        [queryParamName]: search,
        [pageParamName]: page,
        [pageSizeParamName]: pageSize,
      },
      cardListData: await fetchList({
        params: {
          search: {
            query: search,
          },
          page: page - 1,
          pageSize,
        },
      }),
      detailedCardData: query[detailsParamName]
        ? await fetchDetailsById({
            params: {
              showId: +parseQueryParam(query[detailsParamName], defaultDetailsValue),
              withEpisodes: true,
            },
          })
        : null,
    },
  }
}

const Home: FC<Props> = ({ detailedCardData, cardListData, searchParamsData }) => {
  const router = useRouter()

  return (
    <>
      <main className="flex flex-col justify-between">
        <h1 hidden={true}>TV Shows App</h1>

        <ErrorThrowingButton />

        <div className="z-20 bg-white p-4 text-center shadow-[0_0_1rem_#000a]">
          <Search
            submitValue={searchParamsData[queryParamName]}
            setSubmitValue={(value) => {
              router.push({ query: { ...router.query, [pageParamName]: defaultPageValue, [queryParamName]: value } })
            }}
          />
        </div>

        <div className="scrollbar z-10 overflow-y-auto bg-white p-4">
          <CardList list={cardListData.list} />
        </div>

        <div className="z-20 bg-white p-4 text-center shadow-[0_0_1rem_#000a]">
          <Pagination
            count={cardListData.count}
            defaultPageSize={+defaultPageSizeValue}
            page={searchParamsData[pageParamName]}
            pageSize={searchParamsData[pageSizeParamName]}
            pageSizeOptions={[5, 10, 20, 30, 50]}
            setPage={(value) => router.push({ query: { ...router.query, [pageParamName]: value } })}
            setPageSize={(value) =>
              router.push({ query: { ...router.query, [pageParamName]: defaultPageValue, [pageSizeParamName]: value } })
            }
          />
        </div>
      </main>

      {detailedCardData && (
        <DetailedCard
          handleClose={() => {
            const entries = Object.entries(router.query)
            const filtered = entries.filter(([key]) => key !== detailsParamName)
            const query = Object.fromEntries(filtered)
            return router.push({ query })
          }}
          {...detailedCardData}
        />
      )}
    </>
  )
}

export default Home
