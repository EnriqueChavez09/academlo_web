import { AssetData } from '@/lib/utils/helpers/class'
import Image from 'next/image'

export const LogoCommon = () => {
  return (
    <div className="flex authLayout__logo m-0">
      <div className="m-0 text-quintonaryFonSize font-bold">
        <p>resimex</p>
      </div>
      <div className="mx-3">
        <Image src={AssetData.imageLogo} alt={AssetData.imagePlaceholder} />
      </div>
    </div>
  )
}
