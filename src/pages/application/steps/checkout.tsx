import { StepService } from '@/lib/services/local/stepService'
import { redirectToStep } from '@/lib/utils/helpers/functions'
import { ButtonCommon } from '@/ui/components/common'
import { BackStep, ItemStep } from '@/ui/components/step'
import { FormCheckoutStep } from '@/ui/containers/step'
import { HomeLayout } from '@/ui/layouts/HomeLayout'

export default function Checkout() {
  const handleClick = () => {
    localStorage.setItem('step', '3')
    redirectToStep(3)
  }
  return (
    <HomeLayout isStep={true} title="resimex | checkout">
      <div className="personalInformation">
        <div className="personalInformation__content">
          <div className="personalInformation__content__text">
            <BackStep href="/" text="< Back to home" />
            <p>Check out</p>
          </div>
          <div className="personalInformation__content__form">
            <FormCheckoutStep />
          </div>
        </div>
        <div className="personalInformation__information">
          <ItemStep itemStep={StepService.getStep(2)} />
          <div className="personalInformation__information__button">
            <ButtonCommon
              text="SAVE AND PAY"
              customClassName="buttonHome"
              buttonRunFunction={handleClick}
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
