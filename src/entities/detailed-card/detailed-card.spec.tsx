import { render, screen } from '@testing-library/react'
import { mockDetails } from 'tests/mock/mock-details-response'
import { describe, expect, it, vi } from 'vitest'
import { DetailedCard } from '.'

describe('Detailed Card', () => {
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

    render(<DetailedCard {...mockDetails} handleClose={vi.fn()} />)

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
})
