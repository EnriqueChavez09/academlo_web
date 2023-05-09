/* eslint-disable @typescript-eslint/no-inferrable-types */

import { BackgroundImageService } from '@/lib/services/local/backgroundImageService'
import { StepService } from '@/lib/services/local/stepService'
import {
  ItemStepAplication,
  SliderApplication,
} from '@/ui/components/application'
import { ButtonCommon, HeadCommon } from '@/ui/components/common'
import { HomeLayout } from '@/ui/layouts/HomeLayout'
import { useState } from 'react'

export default function HomeAplication() {
  const dataImages = BackgroundImageService.getListImages()
  const [numero, setNumero] = useState(0)
  const handleClick = () => {
    if (numero == 0) {
      setNumero(numero + 1)
    }
    if (numero == 1) {
      setNumero(numero + 1)
    }
    if (numero == 2) {
      setNumero(numero + 1)
    } else if (numero == 3) {
      setNumero(numero - 3)
    }
  }

  return (
    <HomeLayout isHome={false}>
      <HeadCommon title="resimex | application" />
      <div className="homeApplication">
        <div className="homeApplication__background">
          <div className="homeApplication__background__trapeze"></div>
          <div className="homeApplication__background__image">
            <SliderApplication itemBackground={dataImages[numero]} />
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
                  numberActive={numero}
                />
              )
            })}
          </div>
          <div className="homeApplication__content__button">
            <ButtonCommon
              customClassName="buttonHomeBlue"
              buttonRunFunction={handleClick}
              text={numero === 0 ? 'GET STARTED' : 'CONTINUE'}
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
