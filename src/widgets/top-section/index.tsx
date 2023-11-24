import { FC } from 'react'
import { Search } from '@features/search'

export const TopSection: FC = () => {
  return (
    <div className="z-20 bg-white p-4 text-center shadow-[0_0_1rem_#000a]">
      <Search />
    </div>
  )
}
