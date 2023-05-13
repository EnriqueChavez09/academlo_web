import { ModalInterface } from '@/lib/interfaces'
import dataModal from '../../../../public/data/modals.json'

export class ModalService {
  static getModals(): ModalInterface[] {
    const listModals: ModalInterface[] = dataModal
    return listModals
  }
}
