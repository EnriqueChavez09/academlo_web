import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { ButtonCommon, LogoCommon } from '../components/common'

type Props = {
  children: ReactNode
}
export const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <header className="homeLayout__header">
        <div>
          <LogoCommon />
        </div>
        <div className="homeLayout__header__links">
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>Testimonies</Link>
          <Link href={'#'}>Contacts</Link>
        </div>
        <div className="homeLayout__header__button">
          <ButtonCommon text="Get started" customClassName="buttonHome" />
        </div>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}
