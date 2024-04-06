import React from 'react'
import Image from 'next/image'
import './ProductRate.scss'

interface Props {
  rate: number
}

const ProductRate = ({ rate }: Props) => {
  return (
    <div className="product-rate">
      <Image alt="star-icon" src="/icons/star.png" width={16} height={16} />
      <span>{rate}</span>
    </div>
  )
}

export default ProductRate
