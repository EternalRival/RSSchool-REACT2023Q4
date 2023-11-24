import { FC } from 'react'
import loaderImageSrc from './ui/spinner-image.webp'
import Image from 'next/image'

export const Spinner: FC = () => {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <Image
        src={loaderImageSrc}
        alt="image-placeholder"
        className="max-w-full animate-mirror-spin select-none rounded-full"
      />
    </div>
  )
}
