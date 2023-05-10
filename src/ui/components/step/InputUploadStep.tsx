import { AssetData } from '@/lib/utils/helpers/class'
import Image from 'next/image'
import { FC, useState } from 'react'

type Props = {
  label: string
  text: string
  subtext: string
  name: string
}

export const InputUploadStep: FC<Props> = ({ label, text, subtext, name }) => {
  const [, setSelectedFile] = useState<File | null>(null)
  const [, setImageURL] = useState<string | null>(null)
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0]
    setSelectedFile(file || null)
    console.log(name)
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const imageUrl = reader.result as string
        localStorage.setItem(`${name}`, `${imageUrl}`)
        setImageURL(imageUrl)
      }
      reader.readAsDataURL(file)
    } else {
      setImageURL(null)
    }
  }
  return (
    <div className="inputUploadStep">
      <div className="inputUploadStep__label">
        <p>{label}</p>
      </div>
      <div className="inputUploadStep__customUpload">
        <input id={name} type="file" onChange={onChange} />
        <label htmlFor={name}>
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
