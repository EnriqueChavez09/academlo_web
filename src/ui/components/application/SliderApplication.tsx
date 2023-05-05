/* eslint-disable @next/next/no-img-element */
import { BackgroundImageInterface } from '@/lib/interfaces'
import { FC } from 'react'

type Props = {
  itemBackground: BackgroundImageInterface
}

export const SliderApplication: FC<Props> = ({ itemBackground }) => {
  return <img src={itemBackground.image} alt="" />
}
