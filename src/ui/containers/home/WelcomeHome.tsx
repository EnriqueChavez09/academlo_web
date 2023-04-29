import { AssetData } from '@/lib/utils/helpers/class'
import { HelloCommon } from '@/ui/components/common'
import Image from 'next/image'

export const WelcomeHome = () => {
  return (
    <div className="welcomeHome">
      <div className="welcomeHome__content">
        <Image
          className="welcomeHome__content__background"
          src={AssetData.imageBackground}
          alt=""
        />
        <div className="welcomeHome__content__main">
          <p>We</p>
          <p>love to</p>
          <p>help you!</p>
          <HelloCommon />
        </div>
      </div>
    </div>
  )
}
