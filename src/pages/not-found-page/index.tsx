import { FC } from 'react'

export const NotFoundPage: FC = () => {
  return (
    <div className="text-center text-2xl font-bold">
      <h1>[404] Not Found</h1>
      <h2>Error: No route matches URL</h2>
    </div>
  )
}
