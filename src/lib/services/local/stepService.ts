import { StepInterface } from '@/lib/interfaces'
import dataSteps from '../../../../public/data/steps.json'
import dataStepsHome from '../../../../public/data/stepsHome.json'

export class StepService {
  static getListSteps(): StepInterface[] {
    const listSteps: StepInterface[] = dataSteps
    return listSteps
  }
  static getStep(index: number): StepInterface {
    const itemStep: StepInterface = dataStepsHome[index]
    return itemStep
  }
}
