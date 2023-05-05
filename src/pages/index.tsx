import { WelcomeHome } from '@/ui/containers/home'
import { HomeLayout } from '@/ui/layouts/HomeLayout'

export default function Home() {
  return (
    <HomeLayout isHome={true}>
      <WelcomeHome />
    </HomeLayout>
  )
}
