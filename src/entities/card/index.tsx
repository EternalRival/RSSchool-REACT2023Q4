import { FC, ReactEventHandler } from 'react'
// import { NavLink, useLocation } from 'react-router-dom'
import { ApiShowSummary } from '@shared/api/myshows/types/api-show-summary.type'
import Image from 'next/image'
import cardImagePlaceholder from './ui/card-image-placeholder.webp'
import Link from 'next/link'
import { Endpoint, detailsParamName } from '@shared/constants'
import { useRouter } from 'next/router'

const StyledStatus: FC<Pick<ApiShowSummary, 'status'>> = ({ status }) => {
  switch (status) {
    case 'Canceled/Ended':
      return <span className="drop-shadow-[0_0_0.2rem_red]">Closed</span>
    case 'Returning Series':
      return <span className="drop-shadow-[0_0_0.2rem_green]">On Air</span>
    case 'TBD/On The Bubble':
      return <span className="drop-shadow-[0_0_0.2rem_yellow]">Paused</span>
    case 'New Series':
      return <span className="drop-shadow-[0_0_0.2rem_blue]">New</span>
  }
}

type CardProps = Pick<ApiShowSummary, 'id' | 'title' | 'status' | 'year' | 'image' | 'totalSeasons' | 'rating'>

export const Card: FC<CardProps> = ({ id, title, status, year, image, totalSeasons, rating }) => {
  const { query } = useRouter()

  return (
    <Link
      href={{ query: { ...query, [detailsParamName]: id } }}
      className="block transition-shadow hover:shadow-[0_0_0.3rem_0.1rem_#000]"
    >
      <h2 className="break-words p-4 text-2xl font-bold">{title}</h2>
      <Image
        className={'inline-block max-w-full object-contain align-top'}
        src={image ?? cardImagePlaceholder}
        alt={`${title} image`}
        width={320}
        height={180}
        onError={(e) => {
          if (e.target instanceof HTMLImageElement) {
            e.target.src = cardImagePlaceholder.src
          }
        }}
      />
      <p
        className={'inline-block p-4 leading-5'}
        aria-label="card description"
      >
        Year: {year}
        <br />
        Rating: {rating}
        <br />
        Status: <StyledStatus status={status} />
        <br />
        Seasons: {totalSeasons}
      </p>
    </Link>
  )
}
