import { IProductDetail } from '@/types/product'
import React from 'react'
import './ProductList.scss'
import ProductCard from '@/components/common/ProductCard'

interface Props {
  products: IProductDetail[]
}

const ProductList = ({ products }: Props) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  )
}

export default ProductList
