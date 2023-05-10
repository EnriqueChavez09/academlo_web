import { ButtonCommon } from '@/ui/components/common'
import { InputHome } from '@/ui/components/home'

export const FormPersonalInformationStep = () => {
  return (
    <div className="formPersonalInformationStep">
      <div className="formPersonalInformationStep__form">
        <div>
          <InputHome name="legal_name" placeholder="Legal name" type="text" />
        </div>
        <div className="displayFlexInput">
          <div>
            <InputHome
              name="nationality"
              placeholder="Your Nationality"
              type="text"
            />
          </div>
          <div>
            <InputHome name="gender" placeholder="Your Gender" type="text" />
          </div>
        </div>
        <div className="displayNoneInput">
          <InputHome
            name="nationality"
            placeholder="Your Nationality"
            type="text"
          />
        </div>
        <div className="displayNoneInput">
          <InputHome name="gender" placeholder="Your Gender" type="text" />
        </div>
        <div>
          <InputHome
            name="residence"
            placeholder="Your Residence"
            type="text"
          />
        </div>
        <div className="displayFlexInput">
          <div>
            <InputHome
              name="address"
              placeholder="Residence address"
              type="text"
            />
          </div>
          <div>
            <InputHome name="postcode" placeholder="Postcode" type="text" />
          </div>
        </div>
        <div className="displayNoneInput">
          <InputHome
            name="address"
            placeholder="Residence address"
            type="text"
          />
        </div>
        <div className="displayNoneInput">
          <InputHome name="postcode" placeholder="Postcode" type="text" />
        </div>
        <div>
          <InputHome name="phone" placeholder="Contact Phone" type="text" />
        </div>
        <div>
          <InputHome name="email" placeholder="E-mail" type="text" />
        </div>
        <div className="displayFlexInput">
          <div>
            <InputHome name="job" placeholder="Your Job" type="text" />
          </div>
          <div>
            <InputHome name="birth" placeholder="Date of birth" type="text" />
          </div>
        </div>
        <div className="displayNoneInput">
          <InputHome name="job" placeholder="Your Job" type="text" />
        </div>
        <div className="displayNoneInput">
          <InputHome name="birth" placeholder="Date of birth" type="text" />
        </div>
        <div>
          <InputHome name="comment" placeholder="Any comments" type="text" />
        </div>
      </div>
      <div className="formPersonalInformationStep__button">
        <ButtonCommon customClassName="buttonHome" text="SAVE AND CONTINUE" />
      </div>
    </div>
  )
}
