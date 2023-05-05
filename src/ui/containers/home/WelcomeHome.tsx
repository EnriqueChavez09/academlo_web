import { UserService } from '@/lib/services/local/userService'
import { AssetData } from '@/lib/utils/helpers/class'
import { ArrowCommon, HelloCommon } from '@/ui/components/common'
import { ItemUserHome } from '@/ui/components/home'
import Image from 'next/image'

export const WelcomeHome = () => {
  return (
    <div className="welcomeHome">
      <div className="welcomeHome__content">
        <Image
          className="welcomeHome__content__background"
          src={AssetData.imageBackground}
          alt=""
          priority={true}
        />
        <div className="welcomeHome__content__main">
          <div className="welcomeHome__content__main__text">
            <p>We</p>
            <p>love to</p>
            <p>help you!</p>
          </div>
          <div className="welcomeHome__content__main__global">
            <div className="welcomeHome__content__main__global__hi">
              <HelloCommon />
            </div>
            <div className="welcomeHome__content__main__global__country">
              <div className="welcomeHome__content__main__global__country__arrow">
                <div className="welcomeHome__content__main__global__country__arrow__right">
                  <ArrowCommon text="Our Team" isLeft={false} />
                </div>
                <div className="welcomeHome__content__main__global__country__arrow__left">
                  <ArrowCommon text="You" isLeft={true} />
                </div>
              </div>
              <div className="welcomeHome__content__main__global__country__text">
                <p>Global citizenship and residency at your fingertips</p>
                <p>
                  Everyone has the opportunity to thrive, no matter where home
                  is
                </p>
              </div>
              <div className="welcomeHome__content__main__global__country__items">
                {UserService.getListUsers().map((item) => {
                  return <ItemUserHome itemUser={item} key={item.id} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
