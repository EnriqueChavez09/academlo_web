import { TestimonyInterface } from '@/lib/interfaces/testimonyInterface'
import dataTestimonies from './data/testimonies.json'

export class TestimonyService {
  static getListTestimonies(): TestimonyInterface[] {
    const listTestimonies: TestimonyInterface[] = dataTestimonies
    return listTestimonies
  }
}
