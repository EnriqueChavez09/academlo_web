import { useItemTestimony } from '@/lib/hooks/useItemTestimony'
import { AssetData } from '@/lib/utils/helpers/class'
import Image from 'next/image'

export const ItemTestimony = () => {
  const { listTestimonies, currentIndex } = useItemTestimony()
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
