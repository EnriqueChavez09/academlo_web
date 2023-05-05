import { AssetData } from '@/lib/utils/helpers/class'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { ButtonCommon, LogoCommon } from '../components/common'

type Props = {
  children: ReactNode
  isHome?: boolean
}
export const HomeLayout: FC<Props> = ({ children, isHome }) => {
  return (
    <>
      <header className="homeLayout__header">
        <div className="homeLayout__header__content">
          <div>
            <LogoCommon />
          </div>
          <div
            className={`homeLayout__header__content__links ${
              !isHome && 'displayNone'
            }`}
          >
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>Testimonies</Link>
            <Link href={'#'}>Contacts</Link>
          </div>
          <div
            className={`homeLayout__header__content__button ${
              !isHome && 'displayNone'
            }`}
          >
            <ButtonCommon text="Get started" customClassName="buttonHome" />
          </div>
        </div>
      </header>
      <main className="homeLayout__main">{children}</main>
      <footer className="homeLayout__footer">
        <div className="homeLayout__footer__content">
          <div className="homeLayout__footer__content__mail">
            <Image src={AssetData.iconMail} alt="" />
          </div>
          <div className="homeLayout__footer__content__text">
            <p>contact.forwork@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  )
}
