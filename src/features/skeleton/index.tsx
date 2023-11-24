import { Spinner } from '@entities/spinner'
import { FC, ReactNode } from 'react'

type SkeletonProps = {
  enabled: boolean
  children: ReactNode
}

export const Skeleton: FC<SkeletonProps> = ({ children, enabled }) => {
  return enabled ? <Spinner /> : children
}
