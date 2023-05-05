import { BackgroundImageInterface } from '@/lib/interfaces'
import dataBackgroundImage from '../../../../public/data/backgroundImages.json'

export class BackgroundImageService {
  static getListImages(): BackgroundImageInterface[] {
    const listImages: BackgroundImageInterface[] = dataBackgroundImage
    return listImages
  }
}
