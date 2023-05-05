import { HomeAplicationService } from '@/lib/services/local/homeAplicationService'

export const Welcome = () => {
  const content = HomeAplicationService.getContentHomeAplication()

  return (
    <div className="welcome">
      <div className="welcome__title">
        <p>{content.title}</p>
      </div>
      <div className="welcome__rectangle"></div>
      <div className="welcome__text">
        <p>{content.textOne}</p>
        <p>{content.textTwo}</p>
      </div>
    </div>
  )
}
