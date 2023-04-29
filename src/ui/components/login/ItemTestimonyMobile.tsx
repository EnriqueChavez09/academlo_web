import { useItemTestimony } from '@/lib/hooks/useItemTestimony'
import { AssetData } from '@/lib/utils/helpers/class'
import Image from 'next/image'

export const ItemTestimonyMobile = () => {
  const { listTestimonies, currentIndex } = useItemTestimony()
  return (
    <div className="itemTestimonyMobile">
      <div className="itemTestimonyMobile__image">
        <Image
          src={listTestimonies[currentIndex].user.photo}
          alt={AssetData.imagePlaceholder}
          width={164}
          height={260}
        />
      </div>
      <div className="itemTestimonyMobile__text">
        <p> {`"${listTestimonies[currentIndex].description}"`}</p>
        <p> {listTestimonies[currentIndex].user.fullName}</p>
        <p> {listTestimonies[currentIndex].user.country.name}</p>
        <div>
          {listTestimonies.map((item, index) => {
            return <div key={index}></div>
          })}
        </div>
      </div>
    </div>
  )
}
