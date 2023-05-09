import { FC } from 'react'

type Props = {
  text: string
  href: string
}

export const BackStep: FC<Props> = ({ text, href }) => {
  return (
    <a className="backStep" href={href}>
      {text}
    </a>
  )
}
