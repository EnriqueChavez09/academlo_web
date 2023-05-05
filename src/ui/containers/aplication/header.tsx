import Image from 'next/image'
import country from '../../../../public/assets/icons/country.svg'

export const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <p>resimex</p>
      </div>
      <div className="header__icon">
        <Image src={country} alt="No hay icono" />
      </div>
    </div>
  )
}
