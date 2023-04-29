import { AssetData } from '@/lib/utils/helpers/class'
import { HelloCommon } from '@/ui/components/common'
import Image from 'next/image'

export const WelcomeHome = () => {
  return (
    <div className="welcomeHome">
      <Image
        className="welcomeHome__background"
        src={AssetData.imageBackground}
        alt=""
      />
      <HelloCommon />
    </div>
  )
}
