import fetcher from '@/services/fetcher'
import { ENV_VARS } from '@/constants/env-vars'
import ProductList from './containers/ProductList'
import { IProductDetail } from '@/types/product'
import Promo from './containers/Promo'
import './page.scss'

async function fetchProductsData() {
  const result = await fetcher<IProductDetail[]>(`${ENV_VARS.baseUrl}/products`)
  return result
}

export default async function Home() {
  const products = await fetchProductsData()

  return (
    <div className="home-container">
      <Promo />
      <ProductList products={products} />
    </div>
  )
}
