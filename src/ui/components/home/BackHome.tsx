import { AssetData } from '@/lib/utils/helpers/class'
import Image from 'next/image'

export const BackHome = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="backHome">
      <div className="backHome__arrow" onClick={scrollToTop}>
        <Image src={AssetData.iconArrowTop} alt="" />
      </div>
      <div className="backHome__text">
        <p>Back to top</p>
      </div>
    </div>
  )
}
