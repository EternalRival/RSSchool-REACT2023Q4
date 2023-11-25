import { CloseIcon } from '@entities/detailed-card/ui/close-icon'
import { GetByIdResponseBody } from '@shared/api/myshows/types/get-by-id-response-body.type'
import { defaultLanguage } from '@shared/constants'
import { FC, MouseEventHandler } from 'react'

type DetailType = {
  title: string
  value?: string | number
  secondaryValue?: string
  href?: string
}

const Detail: FC<DetailType> = ({ title, value, secondaryValue, href }) => {
  if (value) {
    return (
      <>
        <dt className="mt-2 font-bold">{title}</dt>
        <dd className="ms-6">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {value}
            </a>
          ) : (
            value
          )}
          {secondaryValue && secondaryValue !== value && ` (${secondaryValue})`}
        </dd>
      </>
    )
  }
}

export const DetailedCard: FC<GetByIdResponseBody & { handleClose: MouseEventHandler }> = ({
  handleClose,
  title,
  titleOriginal,
  started,
  ended,
  countryTitle,
  country,
  network,
  runtimeTotal,
  runtime,
  episodes,
  totalSeasons,
  imdbRating,
  imdbUrl,
  kinopoiskRating,
  kinopoiskUrl,
  rating,
  id,
  status,
}) => {
  return (
    <>
      <div
        className="fixed inset-0 z-30 cursor-pointer backdrop-blur-[1px] backdrop-brightness-90"
        onClick={handleClose}
      />

      <aside className="scrollbar relative z-30 overflow-y-auto bg-white px-4">
        <button
          className="mt-4 aspect-square h-12 cursor-pointer rounded bg-teal-100 shadow-md ring-1 ring-inset ring-teal-400 hover:brightness-110 active:brightness-100"
          onClick={handleClose}
        >
          <CloseIcon
            className="m-auto"
            fill="teal"
          />
        </button>
        <h2 className="my-3 text-2xl font-bold">
          {title}
          {titleOriginal && titleOriginal !== title && ` (${titleOriginal})`}
        </h2>
        <dl className="pl-2">
          <Detail
            title="Status"
            value={status}
          />
          {(started || ended) && (
            <>
              <dt className="mt-2 font-bold">Date</dt>
              <dd className="ms-6">
                {started ? new Date(started).toLocaleDateString(defaultLanguage) : '…'}
                {' - '}
                {ended ? new Date(ended).toLocaleDateString(defaultLanguage) : '…'}
              </dd>
            </>
          )}
          <Detail
            title="Country"
            value={countryTitle}
            secondaryValue={country}
          />
          <Detail
            title="Network"
            value={network?.title}
          />
          <Detail
            title="Total running time"
            value={runtimeTotal}
          />
          <Detail
            title="Episode duration (min)"
            value={runtime}
          />
          <Detail
            title="Episodes count"
            value={episodes?.length}
          />
          <Detail
            title="Seasons"
            value={totalSeasons}
          />
          <Detail
            title="IMDB Rating (of 10)"
            value={imdbRating}
            href={imdbUrl}
          />
          <Detail
            title="Kinopoisk Rating (of 10)"
            value={kinopoiskRating}
            href={kinopoiskUrl}
          />
          <Detail
            title="MyShows Rating (of 5)"
            value={rating}
            href={`https://myshows.me/view/${id}`}
          />
        </dl>
      </aside>
    </>
  )
}
