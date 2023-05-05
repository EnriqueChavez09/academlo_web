import { AssetData } from '@/lib/utils/helpers/class'
import Image from 'next/image'
import { FC } from 'react'

type Props = {
  text: string
  isLeft?: boolean
}
export const ArrowCommon: FC<Props> = ({ text, isLeft }) => {
  return (
    <div
      className={`arrowCommon ${
        isLeft ? 'arrowLeftCommon' : 'arrowRightCommon'
      }`}
    >
      <div
        className={
          isLeft ? 'arrowLeftCommon__image' : 'arrowRightCommon__image'
        }
      >
        <Image
          src={isLeft ? AssetData.iconArrowLeft : AssetData.iconArrowRight}
          alt=""
        />
      </div>
      <div className="arrowCommon__text">
        <p>{text}</p>
      </div>
    </div>
  )
}
