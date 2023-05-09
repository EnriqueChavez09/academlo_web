import { BackHome, InvestmentHome } from '@/ui/components/home'
import {
  FormHome,
  ProgramHome,
  UsHome,
  WelcomeHome,
} from '@/ui/containers/home'
import { HomeLayout } from '@/ui/layouts/HomeLayout'

export default function Home() {
  return (
    <HomeLayout isHome={true} title="resimex">
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
      <div className="home__back">
        <BackHome />
      </div>
      <div className="home__form">
        <FormHome />
      </div>
    </HomeLayout>
  )
}
