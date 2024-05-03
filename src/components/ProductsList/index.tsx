import { useGetProductsQuery } from '../../services/api'
import ProductCardSkeleton from '../ProductCardSkeleton'

import ProductCard from '../ProductCard'

import * as S from './styles'

const ProductsList = () => {
  const { data: productsResponse, isLoading } = useGetProductsQuery()

  if (isLoading) {
    return (
      <S.List>
        {[...Array(8)].map((_, index) => (
          <li key={index}>
            <ProductCardSkeleton />
          </li>
        ))}
      </S.List>
    )
  }

  return (
    <S.List>
      {productsResponse && (
        <>
          {productsResponse.products.map((product: Product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </>
      )}
    </S.List>
  )
}

export default ProductsList
