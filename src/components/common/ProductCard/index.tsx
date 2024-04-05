import { IProductDetail } from '@/types/product'
import Image from 'next/image'
import React from 'react'
import './ProductCard.scss'
import Link from 'next/link'

interface Props {
  data: IProductDetail
}

const ProductCard = ({ data }: Props) => {
  return (
    <Link href={`/product/${data.id}`} className="product-card">
      <Image src={data.image} alt={data.title} className="product-image" width={150} height={150} />
      <div className="product-info">
        <span className="product-name text-truncate">{data.title}</span>
        <span className="product-price">${data.price}</span>
      </div>
      <div className="product-rating">
        <div className="product-score">
          <Image alt="star-icon" src="/icons/star.png" width={16} height={16} />
          <span>{data.rating.rate}</span>
        </div>
        <div>-</div>
        <span>{data.rating.count} sold</span>
      </div>
    </Link>
  )
}

export default ProductCard
