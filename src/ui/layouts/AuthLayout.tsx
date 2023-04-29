import { FC, ReactNode } from 'react'
import { LogoCommon } from '../components/common'
import { ItemTestimony, ItemTestimonyMobile } from '../components/login'

type Props = {
  children: ReactNode
  display?: string
}
export const AuthLayout: FC<Props> = ({ children, display }) => {
  return (
    <div className="authLayout">
      <div className="my-0 mx-auto flex-1 flex flex-col">
        <LogoCommon />
        <main>{children}</main>
        <div className="authLayout__desktop rectangulo"></div>
      </div>
      <div className={`authLayout__desktop ${display}`}>
        <ItemTestimony />
      </div>
      <div className="authLayout__mobile triangle"></div>
      <div className="authLayout__mobile">
        <ItemTestimonyMobile />
      </div>
    </div>
  )
}
