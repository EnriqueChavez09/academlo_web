import { StepService } from '@/lib/services/local/stepService'
import { ItemStep } from '@/ui/components/step'
import { HomeLayout } from '@/ui/layouts/HomeLayout'

export default function Checkout() {
  return (
    <HomeLayout isStep={true} title="">
      <div></div>
      <div>
        <ItemStep itemStep={StepService.getStep(2)} />
      </div>
    </HomeLayout>
  )
}
