import { UsInterface } from '@/lib/interfaces'
import { FC } from 'react'

type Props = {
  itemUs: UsInterface
}

export const ItemUsHome: FC<Props> = ({ itemUs }) => {
  return (
    <div className="itemUsHome">
      <p>{itemUs.title}</p>
      <p>{itemUs.description}</p>
    </div>
  )
}
