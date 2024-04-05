import { useEffect, useState } from 'react'
import './Carousel.scss'
import Image from 'next/image'

interface Props {
  images: string[]
}

export default function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const interval = 3000 // 3s interval for automatic slide

  useEffect(() => {
    const timer = setTimeout(() => goToNext(), interval)

    return () => clearTimeout(timer)
  }, [currentIndex])

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="carousel">
      <div className="carouselInner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((path, index) => (
          <div className="carouselItem" key={index}>
            <Image src={path} alt={`Slide ${index + 1}`} width={960} height={240} layout="responsive" priority />
          </div>
        ))}
      </div>
      <button onClick={goToPrevious} className="prev">
        &#10094;
      </button>
      <button onClick={goToNext} className="next">
        &#10095;
      </button>
    </div>
  )
}
