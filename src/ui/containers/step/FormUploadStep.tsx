import { ButtonCommon } from '@/ui/components/common'
import { InputUploadStep } from '@/ui/components/step'

export const FormUploadStep = () => {
  const handleClick = () => {
    localStorage.setItem('step', '3')
    window.location.href = '/application'
  }

  return (
    <div className="formUploadStep">
      <div className="formUploadStep__form">
        <div>
          <InputUploadStep
            label="Upload front to your Passport"
            text="Upload Additional file"
            subtext="Attach file. File size of your documents should not exceed 10MB"
          />
        </div>
        <div>
          <InputUploadStep
            label="Upload front to your Passport"
            text="Upload Additional file"
            subtext="Attach file. File size of your documents should not exceed 10MB"
          />
        </div>
      </div>
      <div className="formUploadStep__check">
        <input type="checkbox" />
        <span>I want to protect my data by signing an NDA</span>
      </div>
      <div className="formUploadStep__button">
        <ButtonCommon
          customClassName="buttonHome"
          text="SAVE AND CONTINUE"
          buttonRunFunction={handleClick}
        />
      </div>
    </div>
  )
}
