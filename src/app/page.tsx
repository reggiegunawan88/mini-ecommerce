import fetcher from '@/services/fetcher'
import { ENV_VARS } from '@/constants/env-vars'
import ProductList from './containers/ProductList'
import { IProductDetail } from '@/types/product'
import './page.scss'
import Recommendations from './containers/Promo'

async function fetchProductsData() {
  const result: IProductDetail[] = await fetcher(`${ENV_VARS.baseUrl}/products`)
  return result
}

export default async function Home() {
  const products = await fetchProductsData()

  return (
    <main className="homepage-container">
      <div className="homepage-contents">
        <Recommendations />
        <ProductList products={products} />
      </div>
    </main>
  )
}
