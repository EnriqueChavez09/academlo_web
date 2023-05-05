/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

export const Imagen = () => {
  const [currentImage, setCurrentImage] = useState('imagen-one.png')
  const nextImage = () => {
    const images = [
      'imagen-one.png',
      'imagen-two.png',
      'imagen-three.png',
      'imagen-four.png',
    ]

    const index = images.indexOf(currentImage)
    if (index === images.length - 1) {
      setCurrentImage(images[0])
    } else {
      setCurrentImage(images[index + 1])
    }
  }
  return (
    <div className="imagen">
      <div className="imagen__image">
        <img
          src={`/assets/images/${currentImage}`}
          alt="No hay imagen"
          id="image"
          onClick={nextImage}
        />
      </div>
      <div></div>
    </div>
  )
}
