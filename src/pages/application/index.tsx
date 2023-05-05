/* eslint-disable @typescript-eslint/no-inferrable-types */
import { BackgroundImageService } from '@/lib/services/local/backgroundImageService'
import { StepService } from '@/lib/services/local/stepService'
import {
  ItemStepAplication,
  SliderApplication,
} from '@/ui/components/application'
import { ButtonCommon } from '@/ui/components/common'
import { HomeLayout } from '@/ui/layouts/HomeLayout'

export default function HomeAplication() {
  const dataImages = BackgroundImageService.getListImages()
  const currentStep: number = 0
  return (
    <HomeLayout isHome={false}>
      <div className="homeApplication">
        <div className="homeApplication__background">
          <div className="homeApplication__background__trapeze"></div>
          <div className="homeApplication__background__image">
            <SliderApplication itemBackground={dataImages[currentStep]} />
          </div>
        </div>
        <div className="homeApplication__content">
          <div>
            <p>Get your Mexican Residence!</p>
            <p>
              Lifestyle choices vary, which is why we take the time to learn
              about your individual situation and requirements.
            </p>
            <p>
              We’ll assist you from start to ﬁnish, ensuring you have the
              insight and knowledge needed to succeed.
            </p>
          </div>
          {StepService.getListSteps().map((item) => {
            return (
              <ItemStepAplication
                key={item.id}
                itemStep={item}
                numberActive={currentStep}
              />
            )
          })}
          <div>
            <ButtonCommon
              customClassName=""
              text={currentStep === 0 ? 'GET STARTED' : 'CONTINUE'}
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
