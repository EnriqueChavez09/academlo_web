/* eslint-disable @next/next/no-img-element */
import { AssetData } from '@/lib/utils/helpers/class'
import { ButtonCommon } from '@/ui/components/common'
import { InputHome } from '@/ui/components/home'
import { useState } from 'react'
export const FormHome = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const change: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    if (e.target.name === 'name') {
      setName(value)
    }
    if (e.target.name === 'email') {
      setEmail(value)
    }
    if (e.target.name === 'message') {
      setMessage(value)
    }
  }
  return (
    <div className="formHome">
      <div className="formHome__background">
        <img src={AssetData.imageForm.src} alt={AssetData.imagePlaceholder} />
      </div>
      <div className="formHome__form">
        <div className="formHome__form__input">
          <InputHome
            value={name}
            inputRunFunction={change}
            placeholder="Your name"
            name="name"
            type="text"
          />
        </div>
        <div className="formHome__form__input">
          <InputHome
            value={email}
            inputRunFunction={change}
            placeholder="Your email"
            name="email"
            type="email"
          />
        </div>
        <div className="formHome__form__input">
          <InputHome
            value={message}
            inputRunFunction={change}
            placeholder="Your message"
            name="message"
            type="text"
          />
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
