import Image from 'next/image'
import { Mail } from '../../../../public/assets/icons'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__background">
        <div className="footer__background__icon">
          <Image src={Mail} alt="" />
        </div>
        <div className="footer__background__text">
          <p>contact.forwork@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
