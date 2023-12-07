import { useAppSelector } from '@app/redux/hooks'
import { Tile } from '@entities/tile'
import { FC } from 'react'

export const SubmitTiles: FC = () => {
  const list = useAppSelector(({ submitHistory }) => submitHistory)

  return (
    <ul className="tile-list">
      {list.map((tileData) => (
        <li className="tile-list-item" key={tileData.uuid}>
          <Tile {...tileData} />
        </li>
      ))}
    </ul>
  )
}
