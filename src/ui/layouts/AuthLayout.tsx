import { AssetData } from '@/lib/utils/helpers/class'
import Image from 'next/image'
import { FC, ReactNode } from 'react'
import { ItemTestimony, ItemTestimonyMobile } from '../components/login'

type Props = {
  children: ReactNode
  display?: string
}
export const AuthLayout: FC<Props> = ({ children, display }) => {
  return (
    <div className="authLayout">
      <div className="my-0 mx-auto flex-1 flex flex-col">
        <div className="flex authLayout__logo m-0">
          <div className="m-0 text-quintonaryFonSize font-bold">
            <p>resimex</p>
          </div>
          <div className="mx-3">
            <Image src={AssetData.imageLogo} alt={AssetData.imagePlaceholder} />
          </div>
        </div>
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
