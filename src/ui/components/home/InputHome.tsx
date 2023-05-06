import { FC } from 'react'
type Props = {
  placeholder: string
  value: string
  name: string
  isError?: boolean
  type: React.HTMLInputTypeAttribute
  inputRunFunction?: React.ChangeEventHandler<HTMLInputElement>
}

export const InputHome: FC<Props> = ({
  placeholder,
  value,
  name,
  type,
  inputRunFunction,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={inputRunFunction}
      name={name}
      className="inputHome"
    />
  )
}
