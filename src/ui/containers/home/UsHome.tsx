import { UsService } from '@/lib/services/local/usService'
import { ItemUsHome } from '@/ui/components/home'

export const UsHome = () => {
  return (
    <div className="usHome">
      <div className="usHome__text">
        <p>Why Choose Us</p>
        <div></div>
      </div>
      <div className="usHome__items">
        {UsService.getListUs().map((item) => {
          return <ItemUsHome key={item.id} itemUs={item} />
        })}
      </div>
    </div>
  )
}
