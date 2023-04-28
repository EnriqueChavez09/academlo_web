import Image from 'next/image'
import { FC } from 'react'
type Props = {
  label: string
  placeholder: string
  value: string
  name: string
  isError: boolean
  icon: string
  type: React.HTMLInputTypeAttribute
  inputRunFunction?: React.ChangeEventHandler<HTMLInputElement>
  buttonRunFunction?: React.MouseEventHandler<HTMLButtonElement>
}

export const InputCommon: FC<Props> = ({
  label,
  placeholder,
  value,
  name,
  isError,
  icon,
  type,
  inputRunFunction,
  buttonRunFunction,
}) => {
  return (
    <div className={isError ? 'inputCommon inputError' : 'inputCommon '}>
      <p>{label}</p>
      <div className="inputCommon__input">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={inputRunFunction}
          name={name}
        />
        <button onClick={buttonRunFunction}>
          <Image src={icon} alt="" />
        </button>
      </div>
    </div>
  )
}
