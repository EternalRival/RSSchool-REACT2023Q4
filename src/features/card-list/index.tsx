import { Card } from '@entities/card'
import { FC } from 'react'
import { ApiShowSummary } from '@shared/api/myshows/types/api-show-summary.type'
import { noResultsMessage } from '@shared/constants'

export const CardList: FC<{ list: ApiShowSummary[] }> = ({ list }) => {
  if (list.length <= 0) {
    return <p>{noResultsMessage}</p>
  }

  return (
    <ul className="scrollbar overflow-visible">
      {list.map(({ id, title, status, year, image, totalSeasons, rating }) => (
        <li
          className="shadow-[0_0_1rem] [&:not(:first-child)]:mt-4"
          key={id}
        >
          <Card
            id={id}
            title={title}
            status={status}
            year={year}
            image={image}
            totalSeasons={totalSeasons}
            rating={rating}
          />
        </li>
      ))}
    </ul>
  )
}
