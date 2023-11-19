import { ApiEpisodeSummary } from './api-episode-summary.type'
import { ApiNetwork } from './api-network.type'
import { ApiOnlineLink } from './api-online-link.type'

export type GetByIdResponseBody = {
  id?: number
  title?: string
  titleOriginal?: string
  description?: string
  totalSeasons?: number
  status?: string
  country?: string
  countryTitle?: string
  started?: string
  ended?: string
  year?: number
  kinopoiskId?: number
  kinopoiskRating?: number
  kinopoiskVoted?: number
  kinopoiskUrl?: string
  tvrageId?: number
  imdbId?: number
  imdbRating?: number
  imdbVoted?: number
  imdbUrl?: string
  watching?: number
  watchingTotal?: number
  voted?: number
  rating?: number
  runtime?: number
  runtimeTotal?: string
  images?: string[]
  image?: string
  genreIds?: number[]
  network?: ApiNetwork
  episodes?: ApiEpisodeSummary[]
  onlineLinks?: ApiOnlineLink[]
  onlineLinkExclusive?: ApiOnlineLink | null
}
