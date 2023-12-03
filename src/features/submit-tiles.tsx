import { useAppSelector } from '@app/redux/hooks'
import { Tile } from '@entities/tile'
import { FC } from 'react'

export const SubmitTiles: FC = () => {
  const list = useAppSelector(({ submitHistory }) => submitHistory)

  return (
    <ul className="tile-list">
      {list.map((tileData, i) => (
        <li className="tile-list-item" key={i}>
          <Tile {...tileData} />
        </li>
      ))}
    </ul>
  )
}
