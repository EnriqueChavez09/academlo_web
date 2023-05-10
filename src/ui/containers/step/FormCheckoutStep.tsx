/* eslint-disable @next/next/no-img-element */
import { BackStep, InputCheckoutStep } from '@/ui/components/step'
import { useEffect, useState } from 'react'

export const FormCheckoutStep = () => {
  const [name, setName] = useState('')
  const [nationality, setnationality] = useState('')
  const [gender, setgender] = useState('')
  const [residence, setresidence] = useState('')
  const [address, setaddress] = useState('')
  const [postcode, setpostcode] = useState('')
  const [phone, setphone] = useState('')
  const [email, setemail] = useState('')
  const [birth, setbirth] = useState('')
  const [job, setjob] = useState('')
  const [image1, setimage1] = useState('')
  const [image2, setimage2] = useState('')
  useEffect(() => {
    setName(localStorage.getItem('name') ?? '')
    setnationality(localStorage.getItem('nationality') ?? '')
    setgender(localStorage.getItem('gender') ?? '')
    setresidence(localStorage.getItem('residence') ?? '')
    setaddress(localStorage.getItem('address') ?? '')
    setpostcode(localStorage.getItem('postcode') ?? '')
    setphone(localStorage.getItem('phone') ?? '')
    setemail(localStorage.getItem('email') ?? '')
    setbirth(localStorage.getItem('birth') ?? '')
    setjob(localStorage.getItem('job') ?? '')
    setimage1(localStorage.getItem('uploadFileOne') ?? '')
    setimage2(localStorage.getItem('uploadFileTwo') ?? '')
  }, [])

  return (
    <div className="formCheckoutStep">
      <div className="formCheckoutStep__back">
        <BackStep href="/application/steps" text="< Edit" />
      </div>
      <div>
        <InputCheckoutStep label="Legal name" text={name} />
      </div>
      <div>
        <div>
          <InputCheckoutStep label="Your Nationality" text={nationality} />
        </div>
        <div>
          <InputCheckoutStep label="Your Residence" text={residence} />
        </div>
      </div>
      <div>
        <div>
          <InputCheckoutStep label="Residence address" text={address} />
        </div>
        <div>
          <InputCheckoutStep label="Post Code" text={postcode} />
        </div>
      </div>
      <div>
        <div>
          <InputCheckoutStep label="Your Gender" text={gender} />
        </div>
        <div>
          <InputCheckoutStep label="Date of birth" text={birth} />
        </div>
        <div>
          <InputCheckoutStep label="Contact Phone" text={phone} />
        </div>
      </div>
      <div>
        <InputCheckoutStep label="Email" text={email} />
      </div>
      <div>
        <InputCheckoutStep label="Your job" text={job} />
      </div>
      <div className="formCheckoutStep__upload">
        <p>Upload front to your Passport</p>

        <div>
          <img src={image1} alt="" />
        </div>
      </div>
      <div className="formCheckoutStep__upload">
        <p>Upload back to your Passport</p>

        <div>
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  )
}
