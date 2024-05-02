import ProductsList from '../../components/ProductsList'
import { useGetProductsQuery } from '../../services/api'

import * as S from './styles'

const Home = () => {
  const { data: productsResponse, isLoading } = useGetProductsQuery()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (productsResponse) {
    return (
      <S.Container className="container">
        <ProductsList products={productsResponse.products} />
      </S.Container>
    )
  }

  return <p>Sem data...</p>
}

export default Home
