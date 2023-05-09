import { StepInterface } from '@/lib/interfaces'
import { FC } from 'react'

type Props = {
  itemStep: StepInterface
}

export const ItemStep: FC<Props> = ({ itemStep }) => {
  return (
    <div className="itemStep">
      <p>{itemStep.title}</p>
      <p>{itemStep.description}</p>
      <p>{itemStep.description_two}</p>
    </div>
  )
}
