import { HeadCommon } from '@/ui/components/common'
import { InvestmentHome } from '@/ui/components/home'
import { ProgramHome, UsHome, WelcomeHome } from '@/ui/containers/home'
import { HomeLayout } from '@/ui/layouts/HomeLayout'

export default function Home() {
  return (
    <HomeLayout isHome={true}>
      <HeadCommon title="resimex" />
      <div className="home__welcome">
        <WelcomeHome />
      </div>
      <div className="home__investment">
        <InvestmentHome />
      </div>
      <div className="home__content">
        <div className="home__content__program">
          <ProgramHome />
        </div>
        <div className="home__content__us">
          <UsHome />
        </div>
      </div>
    </HomeLayout>
  )
}
