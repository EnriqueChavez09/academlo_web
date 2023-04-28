import { AssetData } from '@/lib/utils/helpers/class'
import { ButtonCommon, InputCommon } from '@/ui/components/common'
import { AuthLayout } from '@/ui/layouts/AuthLayout'
import Link from 'next/link'
import { useState } from 'react'

export default function ResetPassword() {
  const [email, setEmail] = useState('')
  const change: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    if (e.target.name === 'email') {
      setEmail(value)
    }
  }

  const login = () => {
    window.location.href = '/'
  }
  return (
    <AuthLayout display="hidden">
      <div className="resetPassword">
        <div className="resetPassword__text">
          <p>Reset your password</p>
          <p>We send a link to reset you </p>
          <p>password to your email</p>
        </div>
        <div className="login__input">
          <InputCommon
            type="email"
            label="Your email*"
            placeholder="Enter your email"
            value={email}
            inputRunFunction={change}
            name="email"
            isError={false}
            icon={email.length > 5 ? AssetData.iconCheck : ''}
          />
        </div>
        <div className="login__button">
          <ButtonCommon
            text="SEND MAIL"
            customClassName={
              email.length > 5
                ? 'login__button__active'
                : 'login__button__active login__button__inactive'
            }
            isDisabled={email.length > 5 ? false : true}
            buttonRunFunction={login}
          />
        </div>
      </div>

      <div className="resetPassword__signUp">
        <p>
          Or Don’t have an account? <Link href="/auth/register">Sign up</Link>
        </p>
      </div>
    </AuthLayout>
  )
}
