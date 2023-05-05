import { StepInterface } from '@/lib/interfaces'
import dataSteps from '../../../../public/data/steps.json'

export class StepService {
  static getListSteps(): StepInterface[] {
    const listSteps: StepInterface[] = dataSteps
    return listSteps
  }
}
