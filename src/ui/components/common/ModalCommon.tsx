import { ModalInterface } from '@/lib/interfaces'
import { ModalType } from '@/lib/utils/constans'
import { AssetData } from '@/lib/utils/helpers/class'
import Image from 'next/image'
import { FC } from 'react'
import { ButtonCommon } from './ButtonCommon'

type Props = {
  itemModal: ModalInterface
  subtitle?: string
  modalType: ModalType
}

export const ModalCommon: FC<Props> = ({ itemModal, subtitle, modalType }) => {
  const src: string =
    modalType === ModalType.ERROR
      ? AssetData.iconError
      : modalType === ModalType.SUCCESS
      ? AssetData.iconSuccess
      : AssetData.iconMessage

  const classNameModal: string =
    modalType === ModalType.ERROR
      ? 'errorModal'
      : modalType === ModalType.SUCCESS
      ? 'successModal'
      : 'messageModal'
  return (
    <div className="modalCommon">
      <div className="modalCommon__icons">
        <div>
          <Image src={src} alt=""></Image>
        </div>
        <div>
          <Image src={AssetData.iconExit} alt=""></Image>
        </div>
      </div>
      <div className="modalCommon__texts">
        <p className={classNameModal}>{itemModal.title}</p>
        <p>{subtitle}</p>
      </div>
      {ModalType.MESSAGE === modalType && (
        <div className="modalCommon__buttons">
          <div>
            <ButtonCommon text="CANCEL" customClassName="buttonModalCancel" />
          </div>
          <div>
            <ButtonCommon
              text="CONTINUE"
              customClassName="buttonModalContinue"
            />
          </div>
        </div>
      )}
    </div>
  )
}
