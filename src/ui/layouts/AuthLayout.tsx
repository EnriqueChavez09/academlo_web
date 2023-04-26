import { AssetData } from '@/lib/utils/helpers/class'
import Image from 'next/image'
import { FC, ReactNode } from 'react'
import { ItemTestimony } from '../components/login'

type Props = {
  children: ReactNode
}
export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <div className="my-0 mx-auto flex-1 flex flex-col">
        <div className="flex px-16 py-7 m-0">
          <div className="m-0 text-quintonaryFonSize font-bold">
            <p>resimex</p>
          </div>
          <div className="mx-3">
            <Image src={AssetData.imageLogo} alt={AssetData.imagePlaceholder} />
          </div>
        </div>
        <main>{children}</main>
        <div className="rectangulo bg-primaryColor m-0"></div>
      </div>
      <div className="m-0 fle">
        <ItemTestimony />
      </div>
    </div>
  )
}
