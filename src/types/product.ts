export interface IProductDetail {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: IProductRating
}

interface IProductRating {
  rate: number
  count: number
}
