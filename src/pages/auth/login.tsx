import { AuthLayout } from '@/ui/layouts/AuthLayout'

export default function Login() {
  return (
    <AuthLayout>
      <div>
        <p>Welcome to you Resimex</p>
        <p>Log in to your account.</p>
      </div>
      {/* <div>
          <InputCommon
            label="Your username*"
            placeholder="Enter your username"
            value=""
          />
        </div>
        <div>
          <InputCommon label="Password" placeholder="Enter password" value="" />
        </div> */}
    </AuthLayout>
  )
}
