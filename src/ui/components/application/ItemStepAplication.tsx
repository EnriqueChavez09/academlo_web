import { StepInterface } from '@/lib/interfaces'
import { StepService } from '@/lib/services/local/stepService'
import { FC } from 'react'

type Props = {
  itemStep: StepInterface
  numberActive?: number
}

export const ItemStepAplication: FC<Props> = ({ itemStep, numberActive }) => {
  const totalItemsStep: number = StepService.getListSteps().length
  return (
    <div className="itemStepApplication">
      <div className="itemStepApplication__contentNumber">
        <div
          className={`itemStepApplication__contentNumber__number numberNotActive ${
            itemStep.number === numberActive && 'numberActive'
          }`}
        >
          <p>{itemStep.number}</p>
        </div>
        <div
          className={`itemStepApplication__contentNumber__bar ${
            totalItemsStep === itemStep.number && 'displayNone'
          }`}
        ></div>
      </div>
      <div className="itemStepApplication__text">
        <p>{itemStep.title}</p>
        <p>{itemStep.description}</p>
      </div>
    </div>
  )
}
