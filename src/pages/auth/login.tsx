import { AssetData } from '@/lib/utils/helpers/class'
import { ButtonCommon, InputCommon } from '@/ui/components/common'
import { AuthLayout } from '@/ui/layouts/AuthLayout'
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const change: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    if (e.target.name === 'username') {
      setUsername(value)
    }
    if (e.target.name === 'password') {
      setPassword(value)
    }
  }
  const showPassword = () => {
    setIsVisible(!isVisible)
  }
  const login = () => {
    window.location.href = '/'
  }
  return (
    <AuthLayout>
      <div className="login__text">
        <p>Welcome to you Resimex</p>
        <p>Log in to your account.</p>
      </div>
      <div className="login__input">
        <InputCommon
          type="text"
          label="Your username*"
          placeholder="Enter your username"
          value={username}
          inputRunFunction={change}
          name="username"
          isError={false}
          icon={username.length > 5 ? AssetData.iconCheck : ''}
        />
      </div>
      <div className="login__input">
        <InputCommon
          type={isVisible ? 'text' : 'password'}
          name="password"
          label="Password"
          placeholder="Enter password"
          value={password}
          inputRunFunction={change}
          isError={false}
          icon={AssetData.iconEye}
          buttonRunFunction={showPassword}
        />
      </div>
      <div className="login__password">
        <Link href="/auth/reset-password">Forgot you password?</Link>
      </div>
      <div className="login__button">
        <ButtonCommon
          text="LOG IN"
          customClassName={
            username.length > 5 && password.length > 5
              ? 'login__button__active'
              : 'login__button__active login__button__inactive'
          }
          isDisabled={username.length > 5 && password.length > 5 ? false : true}
          buttonRunFunction={login}
        />
      </div>
      <div className="login__signUp">
        <p>
          Or Don’t have an account? <Link href="/auth/register">Sign up</Link>
        </p>
      </div>
    </AuthLayout>
  )
}
