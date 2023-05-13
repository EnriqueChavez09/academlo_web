import { ModalService } from '@/lib/services/local/modalService'
import { ModalType } from '@/lib/utils/constans'
import { ModalCommon } from '@/ui/components/common'

export default function Modal() {
  const items = ModalService.getModals()
  return (
    <div>
      <div className="my-5">
        <ModalCommon
          itemModal={items[0]}
          modalType={ModalType.SUCCESS}
          subtitle="Información guardada con éxito!"
        />
      </div>
      <div className="my-5">
        <ModalCommon
          itemModal={items[1]}
          modalType={ModalType.MESSAGE}
          subtitle="Información guardada con éxito!"
        />
      </div>
      <div className="my-5">
        <ModalCommon
          itemModal={items[2]}
          modalType={ModalType.ERROR}
          subtitle="Información guardada con éxito"
        />
      </div>
    </div>
  )
}
