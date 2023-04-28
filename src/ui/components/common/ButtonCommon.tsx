import { FC } from 'react'
type Props = {
  text: string
  customClassName: string
  isDisabled?: boolean
  buttonRunFunction?: React.MouseEventHandler<HTMLButtonElement>
}
export const ButtonCommon: FC<Props> = ({
  text,
  customClassName,
  isDisabled = false,
  buttonRunFunction,
}) => {
  return (
    <button
      className={customClassName}
      onClick={buttonRunFunction}
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}
