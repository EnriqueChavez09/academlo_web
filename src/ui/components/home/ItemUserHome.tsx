/* eslint-disable @next/next/no-img-element */
import { UserInterface } from '@/lib/interfaces/userInterface'
import { AssetData } from '@/lib/utils/helpers/class'
import { FC } from 'react'

type Props = {
  itemUser: UserInterface
}

export const ItemUserHome: FC<Props> = ({ itemUser }) => {
  return (
    <div className="itemUserHome">
      <div className="itemUserHome__user">
        <img src={itemUser.photo} alt="" />
      </div>
      <div className="itemUserHome__country">
        <img
          src={
            itemUser.country
              ? itemUser.country.image
              : AssetData.imagePlaceholder
          }
          alt=""
        />
      </div>
    </div>
  )
}
