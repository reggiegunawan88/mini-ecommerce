import ProductDetail from '@/app/containers/ProductDetail'
import { ENV_VARS } from '@/constants/env-vars'
import fetcher from '@/services/fetcher'
import { IProductDetail } from '@/types/product'

async function fetchProductDetail({ id }: { id: number }) {
  const result = await fetcher<IProductDetail>(`${ENV_VARS.baseUrl}/products/${id}`)
  return result
}

export default async function Product({ params: { id } }: { params: { id: number } }) {
  const productDetail = await fetchProductDetail({ id })

  return <ProductDetail data={productDetail} />
}
