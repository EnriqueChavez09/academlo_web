import { FC } from 'react'

type Props = {
  label: string
  text: string
}

export const InputCheckoutStep: FC<Props> = ({ label, text }) => {
  return (
    <div className="inputCheckoutStep">
      <p>{label}</p>
      <p>{text}</p>
    </div>
  )
}
