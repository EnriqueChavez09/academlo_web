import { AssetData } from '@/lib/utils/helpers/class'
import Image from 'next/image'
import { FC } from 'react'

type Props = {
  label: string
  text: string
  subtext: string
}

export const InputUploadStep: FC<Props> = ({ label, text, subtext }) => {
  return (
    <div className="inputUploadStep">
      <div className="inputUploadStep__label">
        <p>{label}</p>
      </div>
      <div className="inputUploadStep__customUpload">
        <input id="myFileInput" type="file" />
        <label htmlFor="myFileInput">
          <Image src={AssetData.iconUpload} alt="" />
        </label>
        <span>{text}</span>
      </div>
      <div className="inputUploadStep__text">
        <p>{subtext}</p>
      </div>
    </div>
  )
}
