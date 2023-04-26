import { FC } from 'react'
type Props = {
  label: string
  placeholder: string
  value: string
}

export const InputCommon: FC<Props> = ({ label, placeholder, value }) => {
  return (
    <div>
      <p>{label}</p>
      <input type="text" placeholder={placeholder} value={value} />
    </div>
  )
}
