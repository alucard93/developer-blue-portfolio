import Image from 'next/image'

import { ImageInterface } from '@/interfaces/ImageInterface'

const DevImg = ({
  containerStyles,
  containerStylesImage,
  imgSrc,
  priority,
  alt,
}: ImageInterface) => {
  return (
    <div className={`${containerStyles} overflow-hidden`}>
      {priority ? (
        <Image
          className={`${containerStylesImage} overflow-hidden object-contain h-[580px]`}
          src={imgSrc}
          width={500}
          height={380}
          priority
          alt={alt}
        />
      ) : (
        <Image
          className={`${containerStylesImage} overflow-hidden object-contain h-[580px]`}
          src={imgSrc}
          width={500}
          height={380}
          alt={alt}
        />
      )}
    </div>
  )
}

export default DevImg
