import { HomeAplicationService } from '@/lib/services/local/homeAplicationService'
import { ShowHideContent } from '@/ui/components/ShowHideContent'

export const Council = () => {
  const content = HomeAplicationService.getContentHomeAplication()
  return (
    <div className="council">
      <div className="council__information">
        <div className="council__information__position">
          {content.firstPosition}
          <div></div>
        </div>
        <div className="council__information__text">
          <p> {content.firstName}</p>
          <p>{content.information}</p>
        </div>
      </div>
      <div className="council__information">
        <div className="council__information__position">
          {content.secondPositon}
        </div>
        <div className="council__information__text">
          <p>{content.secondName}</p>
          <p>{content.information}</p>
        </div>
      </div>
      <div className="council__information">
        <div className="council__information__position">
          {content.thirdPosition}
        </div>
        <div className="council__information__text">
          <p>{content.thirdName}</p>
          <p>{content.information}</p>
        </div>
      </div>
      <div className="council__button">
        <ShowHideContent
          showText="GET STARTED"
          hideText="CONTINUE"
        ></ShowHideContent>
      </div>
    </div>
  )
}
