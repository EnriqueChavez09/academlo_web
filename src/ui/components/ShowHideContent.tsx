import { FC, useState } from 'react'

type Props = {
  showText?: string
  hideText?: string
  children?: string
}

export const ShowHideContent: FC<Props> = ({
  showText,
  hideText,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? hideText : showText}
      </button>
      {isVisible && <div>{children}</div>}
    </div>
  )
}
