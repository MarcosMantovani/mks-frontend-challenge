import * as S from './styles'

import ProductCard from '../ProductCard'

type Props = {
  products: Product[]
}

const ProductsList = ({ products }: Props) => {
  return (
    <S.List>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </S.List>
  )
}

export default ProductsList
