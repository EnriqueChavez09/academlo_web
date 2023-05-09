/* eslint-disable @typescript-eslint/no-inferrable-types */

import { BackgroundImageService } from '@/lib/services/local/backgroundImageService'
import { StepService } from '@/lib/services/local/stepService'
import { redirectToStep } from '@/lib/utils/helpers/functions'
import {
  ItemStepAplication,
  SliderApplication,
} from '@/ui/components/application'
import { ButtonCommon } from '@/ui/components/common'
import { HomeLayout } from '@/ui/layouts/HomeLayout'
import { useEffect, useState } from 'react'

export default function HomeAplication() {
  const dataImages = BackgroundImageService.getListImages()
  const [step, setStep] = useState(0)
  useEffect(() => {
    setStep(Number(localStorage.getItem('step') ?? 0))
  }, [])

  const handleClick = () => {
    if (step === 0) {
      setStep(1)
      localStorage.setItem('step', '1')
    }
    redirectToStep(step)
  }

  return (
    <HomeLayout isHome={false} title="resimex | application">
      <div className="homeApplication">
        <div className="homeApplication__background">
          <div className="homeApplication__background__trapeze"></div>
          <div className="homeApplication__background__image">
            <SliderApplication itemBackground={dataImages[step]} />
          </div>
        </div>
        <div className="homeApplication__content">
          <div className="homeApplication__content__text">
            <p>Get your Mexican Residence!</p>
            <div className="homeApplication__content__text__rectangle"></div>
            <p>
              Lifestyle choices vary, which is why we take the time to learn
              about your individual situation and requirements.
            </p>
            <p>
              We’ll assist you from start to ﬁnish, ensuring you have the
              insight and knowledge needed to succeed.
            </p>
          </div>
          <div className="homeApplication__content__item">
            {StepService.getListSteps().map((item) => {
              return (
                <ItemStepAplication
                  key={item.id}
                  itemStep={item}
                  numberActive={step}
                />
              )
            })}
          </div>
          <div className="homeApplication__content__button">
            <ButtonCommon
              customClassName="buttonHomeBlue"
              buttonRunFunction={handleClick}
              text={step === 0 ? 'GET STARTED' : 'CONTINUE'}
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
