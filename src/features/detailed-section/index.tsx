// import { useGetByIdQuery } from 'app/redux/api/myshows.service'
// import { useAppDispatch } from 'app/redux/hooks'
// import { setDetailsFlags } from 'app/redux/slices/details-flags-slice'
import { DetailedCard } from '@entities/detailed-card'
import { Skeleton } from '@features/skeleton'
import { FC, MouseEventHandler, useEffect } from 'react'
// import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Endpoint, defaultLanguage } from '@shared/constants'
// import styles from './detailed-section.module.css'

export const DetailedSection: FC = () => {
  // const { id } = useParams()
  // const location = useLocation()
  // const navigation = useNavigate()
  // if (typeof id === 'undefined') {
  //   throw new Error('Wrong query types')
  // }

  const handleClose: MouseEventHandler = () => {
    // navigation(`${Endpoint.ROOT}${location.search}`)
  }

  // const {
  //   currentData,
  //   isFetching,
  //   isLoading,
  //   isError,
  //   isSuccess,
  //   isUninitialized,
  // } = useGetByIdQuery({
  //   params: { showId: +id, withEpisodes: true },
  //   lang: defaultLanguage,
  // })

  // const dispatch = useAppDispatch()
  // useEffect(() => {
  //   dispatch(
  //     setDetailsFlags({
  //       isFetching,
  //       isLoading,
  //       isError,
  //       isSuccess,
  //       isUninitialized,
  //     })
  //   )
  // }, [dispatch, isError, isFetching, isLoading, isSuccess, isUninitialized])

  const currentData = {}

  return (
    <Skeleton enabled={true /* isFetching */}>
      <div
        className="fixed inset-0 z-30 cursor-pointer backdrop-blur-[1px] backdrop-brightness-90"
        onClick={handleClose}
      />
      <DetailedCard
        {...currentData}
        handleClose={handleClose}
      />
    </Skeleton>
  )
}

// TODO
