import { CardList } from '@features/card-list'
import { Pagination } from '@features/pagination'
import { FC } from 'react'
import { mockList } from '../../tests/mock/mock-list-response'

export const BottomSection: FC = () => {
  return (
    <>
      <div className="scrollbar z-10 overflow-y-auto bg-white p-4">
        <CardList list={mockList} />
      </div>
      <div className="z-20 bg-white p-4 text-center shadow-[0_0_1rem_#000a]">
        <Pagination
          count={100}
          defaultPageSize={30}
          page={1}
          pageSize={30}
          pageSizeOptions={[5, 10, 15, 30]}
          setPage={() => {}}
          setPageSize={() => {}}
        />
      </div>
    </>
  )
}
