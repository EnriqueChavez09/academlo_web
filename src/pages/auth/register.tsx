import { AssetData } from '@/lib/utils/helpers/class'
import { ButtonCommon, HeadCommon, InputCommon } from '@/ui/components/common'
import { AuthLayout } from '@/ui/layouts/AuthLayout'
import Link from 'next/link'
import { useState } from 'react'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const change: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    if (e.target.name === 'username') {
      setUsername(value)
    }
    if (e.target.name === 'password') {
      setPassword(value)
    }
    if (e.target.name === 'email') {
      setEmail(value)
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
      <HeadCommon title="resimex | register" />
      <div className="login__text">
        <p>Create an account</p>
        <p>And start your trip safely with us.</p>
      </div>
      <div className="login__input">
        <InputCommon
          type="email"
          label="Your email*"
          placeholder="Please enter your email"
          value={email}
          inputRunFunction={change}
          name="email"
          isError={false}
          icon={email.length > 5 ? AssetData.iconCheck : ''}
        />
      </div>
      <div className="login__input">
        <InputCommon
          type="text"
          label="Create username*"
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
      <div className="login__condition">
        <input type="checkbox" />
        <p>
          By creating an account you are agreeing to our Terms and Conditions
          and Privacy Policy
        </p>
      </div>
      <div className="login__button">
        <ButtonCommon
          text="SIGN UP"
          customClassName={
            username.length > 5 && password.length > 5 && email.length > 5
              ? 'login__button__active'
              : 'login__button__active login__button__inactive'
          }
          isDisabled={
            username.length > 5 && password.length > 5 && email.length > 5
              ? false
              : true
          }
          buttonRunFunction={login}
        />
      </div>
      <div className="login__signUp">
        <p>
          Already have a member? <Link href="/auth/login">Log in</Link>
        </p>
      </div>
    </AuthLayout>
  )
}
