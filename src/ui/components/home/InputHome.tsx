import { FC, useState } from 'react'
type Props = {
  placeholder: string
  name: string
  isError?: boolean
  type: React.HTMLInputTypeAttribute
}

export const InputHome: FC<Props> = ({ placeholder, name, type }) => {
  const [first, setfirst] = useState('')
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    if (e.target.name === name) {
      setfirst(value)
    }
  }
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={first}
      onChange={onChange}
      name={name}
      className="inputHome"
    />
  )
}
