import { TestimonyService } from '@/lib/services/local'
import { AssetData } from '@/lib/utils/helpers/class'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const ItemTestimony = () => {
  const listTestimonies = TestimonyService.getListTestimonies()
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % listTestimonies.length)
    }, 2000)
    return () => clearTimeout(intervalId)
  }, [currentIndex, listTestimonies.length])

  return (
    <div className="itemTestimony">
      <Image
        src={listTestimonies[currentIndex].user.photo}
        alt={AssetData.imagePlaceholder}
        width={440}
        height={750}
      />
      <p> {`"${listTestimonies[currentIndex].description}"`}</p>
      <p> {listTestimonies[currentIndex].user.fullName}</p>
      <p> {listTestimonies[currentIndex].user.country.name}</p>
      <div>
        {listTestimonies.map((item, index) => {
          return <div key={index}></div>
        })}
      </div>
    </div>
  )
}
