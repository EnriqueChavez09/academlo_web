import Image from 'next/image'
import { FC } from 'react'
type Props = {
  text: string
  customClassName: string
  isDisabled?: boolean
  src?: string
  buttonRunFunction?: React.MouseEventHandler<HTMLButtonElement>
}
export const ButtonCommon: FC<Props> = ({
  text,
  customClassName,
  isDisabled = false,
  src = '',
  buttonRunFunction,
}) => {
  return (
    <button
      className={customClassName}
      onClick={buttonRunFunction}
      disabled={isDisabled}
    >
      {src !== '' && <Image src={src} alt="" />}
      <p>{text}</p>
    </button>
  )
}
