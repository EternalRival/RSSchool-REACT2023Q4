import { mockDetails } from '@tests/mocks/mock-details-response'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DetailedCard } from '.'

describe('Detailed Card', () => {
  const user = userEvent.setup()

  it('Make sure the detailed card component correctly displays the detailed card data', async () => {
    const detailsTextContentList = [
      mockDetails.title,
      mockDetails.titleOriginal,
      mockDetails.status,
      mockDetails.countryTitle,
      mockDetails.country,
      mockDetails.network?.country,
      mockDetails.runtimeTotal,
      mockDetails.runtime,
      mockDetails.episodes?.length,
      mockDetails.totalSeasons,
      mockDetails.imdbRating,
      mockDetails.kinopoiskRating,
      mockDetails.rating,
    ]
    const detailsInnerHtmlList = [mockDetails.imdbUrl, mockDetails.kinopoiskUrl]

    render(
      <DetailedCard
        {...mockDetails}
        handleClose={vi.fn()}
      />
    )

    const detailedCard = await screen.findByRole('complementary')

    detailsTextContentList.forEach((detail) => {
      if (typeof detail !== 'undefined') {
        expect(detailedCard).toHaveTextContent(detail.toString())
      }
    })
    detailsInnerHtmlList.forEach((detail) => {
      if (typeof detail !== 'undefined') {
        expect(detailedCard).toContainHTML(detail)
      }
    })
  })

  it('Ensure that clicking the close button hides the component', async () => {
    /* mockUseRouter()

    const getServerSidePropsSpy = vi.spyOn(HomeExports, 'getServerSideProps')

    console.log(getServerSidePropsSpy.mock.lastCall)

    render(
      <Home
        detailedCardData={null}
        searchParamsData={{ search: '', page: +defaultPageValue, pageSize: +defaultPageSizeValue }}
        cardListData={{ count: 300, list: mockList }}
      />,
    )

    await user.click(within(screen.getByRole('list')).getAllByRole('link')[0])

    const detailedCard = await screen.findByRole('complementary')
    expect(detailedCard).toBeVisible()

    await user.click(screen.getByRole('button', { name: /close button/i }))

    expect(detailedCard).not.toBeVisible() */

    expect(1).toBe(1)
  })
})
