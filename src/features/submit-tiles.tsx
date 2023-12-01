import { useAppSelector } from '@app/redux/hooks'
import { Tile } from '@entities/tile'
import { FC } from 'react'

export const SubmitTiles: FC = () => {
  const list = useAppSelector(({ firstForm }) => firstForm)
  console.log(list)
  return (
    <ul>
      <li>
        <Tile kek={null} />
      </li>
      <li>
        <Tile kek={null} />
      </li>
      <li>
        <Tile kek={null} />
      </li>
      <li>
        <Tile kek={null} />
      </li>
      <li>
        <Tile kek={null} />
      </li>
    </ul>
  )
}
