import { StepService } from '@/lib/services/local/stepService'
import { BackStep, ItemStep } from '@/ui/components/step'
import { FormPersonalInformationStep } from '@/ui/containers/step'
import { HomeLayout } from '@/ui/layouts/HomeLayout'

export default function PersonalInformation() {
  return (
    <HomeLayout isStep={true} title="resimex | personal information">
      <div className="personalInformation">
        <div className="personalInformation__content">
          <div className="personalInformation__content__text">
            <BackStep href="/" text="< Back to home" />
            <p>Your personal information</p>
          </div>
          <div className="personalInformation__content__form">
            <FormPersonalInformationStep />
          </div>
        </div>
        <div className="personalInformation__information">
          <ItemStep itemStep={StepService.getStep(0)} />
        </div>
      </div>
    </HomeLayout>
  )
}
