import { UsInterface } from '@/lib/interfaces'
import dataUs from '../../../../public/data/itemsUs.json'

export class UsService {
  static getListUs(): UsInterface[] {
    const listUs: UsInterface[] = dataUs
    return listUs
  }
}
