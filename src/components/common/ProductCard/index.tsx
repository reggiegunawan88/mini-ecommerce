import { IProductDetail } from '@/types/product'
import Image from 'next/image'
import React from 'react'
import './ProductCard.scss'
import Link from 'next/link'
import ProductRate from '../ProductRate'

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
        <ProductRate rate={data.rating.rate} />
        <div>-</div>
        <span>{data.rating.count} sold</span>
      </div>
    </Link>
  )
}

export default ProductCard
