/* eslint-disable @next/next/no-img-element */
import { AssetData } from '@/lib/utils/helpers/class'
import { ButtonCommon } from '@/ui/components/common'
import { InputHome } from '@/ui/components/home'
export const FormHome = () => {
  return (
    <div className="formHome">
      <div className="formHome__background">
        <img src={AssetData.imageForm.src} alt={AssetData.imagePlaceholder} />
      </div>
      <div className="formHome__form">
        <div className="formHome__form__input">
          <InputHome placeholder="Your name" name="name" type="text" />
        </div>
        <div className="formHome__form__input">
          <InputHome placeholder="Your email" name="email" type="email" />
        </div>
        <div className="formHome__form__input">
          <InputHome placeholder="Your message" name="message" type="text" />
        </div>
        <div className="formHome__form__button">
          <ButtonCommon
            customClassName="buttonHome"
            text="SEND MESSAGE"
            src={AssetData.iconSend}
          />
        </div>
      </div>
    </div>
  )
}
