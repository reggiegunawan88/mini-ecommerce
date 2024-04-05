'use client'

import Carousel from '@/components/common/Carousel'
import React from 'react'
import './Promo.scss'

const Promo = () => {
  const mockImages = ['/images/promo-1.jpg', '/images/promo-2.jpg', '/images/promo-3.jpg']

  return (
    <div className="promo-container">
      <span>Check our promo!</span>
      <Carousel images={mockImages} />
    </div>
  )
}

export default Promo
