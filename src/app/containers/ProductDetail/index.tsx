import React from 'react'
import Image from 'next/image'
import { IProductDetail } from '@/types/product'
import ProductRate from '@/components/common/ProductRate'
import Divider from '@/components/common/Divider'
import './ProductDetail.scss'

interface Props {
  data: IProductDetail
}

const ProductDetail = ({ data }: Props) => {
  return (
    <div className="container">
      {/* Product image section */}
      <div className="image-container">
        <Image alt="product-img" src={data.image} width={400} height={400} priority />
      </div>

      <div className="product-detail-container">
        {/* Product description section */}
        <div className="title-container">
          <span className="price-label">${data.price}</span>
          <span className="title-label">{data.title}</span>
          <div className="product-rating">
            <ProductRate rate={data.rating.rate} />
            <span>-</span>
            <span className="sold-description">{data.rating.count} products are sold</span>
          </div>
        </div>

        <Divider />

        <div className="description-container">
          <span>Product Detail</span>
          <p>Category: {data.category}</p>
        </div>

        <Divider />

        <div className="description-container">
          <span>Product Description</span>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
