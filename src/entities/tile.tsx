import { SubmitData } from '@app/redux/slices/first.slice'
import { FC, Fragment } from 'react'

export const Tile: FC<SubmitData> = ({
  age,
  country,
  email,
  gender,
  name,
  password,
  picture,
  terms,
}) => {
  const list = [
    ['Name', name],
    ['Age', age],
    ['Email', email],
    ['Password', password],
    ['Gender', gender],
    ['T&C', terms],
    ['Picture', picture],
    ['Country', country],
  ] as const

  return (
    <dl className="tile">
      {list.map(([title, detail]) => (
        <Fragment key={title}>
          <dt className="tile-title">{title}</dt>
          <dd className="tile-detail">
            {title === 'Picture' ? (
              <img src={picture ?? ''} alt="" width={'auto'} height={128} />
            ) : (
              JSON.stringify(detail)
            )}
          </dd>
        </Fragment>
      ))}
    </dl>
  )
}
