import { AssetData } from '@/lib/utils/helpers/class'
import Image from 'next/image'
export const HelloCommon = () => {
  return (
    <div className="helloCommon">
      <div>
        <Image src={AssetData.iconHi} alt="" />
      </div>
      <div className="helloCommon__hello">
        <p>Say, Hello!</p>
      </div>
      <div className="helloCommon__send">
        <Image src={AssetData.iconSend} alt="" />
      </div>
    </div>
  )
}
