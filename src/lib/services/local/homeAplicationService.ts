import { HomeAplicationInterface } from '@/lib/interfaces/homeAplicationInterface'
import dataHomeAplication from '../../../../public/data/homeAplication.json'

export class HomeAplicationService {
  static getContentHomeAplication(): HomeAplicationInterface {
    const contentHomeAplication: HomeAplicationInterface = dataHomeAplication
    return contentHomeAplication
  }
}
