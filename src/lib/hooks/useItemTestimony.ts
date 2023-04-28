import { useEffect, useState } from 'react'
import { TestimonyService } from '../services/local'
export const useItemTestimony = () => {
  const listTestimonies = TestimonyService.getListTestimonies()
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % listTestimonies.length)
    }, 2000)
    return () => clearTimeout(intervalId)
  }, [currentIndex, listTestimonies.length])
  return {
    listTestimonies,
    currentIndex,
  }
}
