import { StepService } from '@/lib/services/local/stepService'
import { BackStep, ItemStep } from '@/ui/components/step'
import { FormUploadStep } from '@/ui/containers/step'
import { HomeLayout } from '@/ui/layouts/HomeLayout'

export default function Upload() {
  return (
    <HomeLayout isStep={true} title="resimex | upload">
      <div className="personalInformation">
        <div className="personalInformation__content">
          <div className="personalInformation__content__text">
            <BackStep href="/" text="< Back" />
            <p>Upload your documentation</p>
          </div>
          <div className="personalInformation__content__form">
            <FormUploadStep />
          </div>
        </div>
        <div className="personalInformation__information">
          <ItemStep itemStep={StepService.getStep(1)} />
        </div>
      </div>
    </HomeLayout>
  )
}
