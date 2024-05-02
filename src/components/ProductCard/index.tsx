import { useDispatch } from 'react-redux'

import { add } from '../../store/reducers/cart'

import shoppingBag from '../../assets/images/shopping-bag.svg'

import * as S from './styles'

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch()

  const getDescription = (text: string) => {
    if (text.length > 55) {
      return text.slice(0, 55) + '...'
    }
    return text
  }

  const addToCart = () => dispatch(add(product))

  return (
    <S.Card>
      <div className="content">
        <S.Photo src={product.photo} alt={product.name} />
        <S.MainInfo>
          <p className="name">{product.name}</p>
          <span className="price">R${Math.trunc(product.price)}</span>
        </S.MainInfo>
        <S.Description>{getDescription(product.description)}</S.Description>
      </div>
      <S.Button onClick={addToCart}>
        <img src={shoppingBag} alt="Shopping bag" />
        <p className="priceText">Comprar</p>
      </S.Button>
    </S.Card>
  )
}

export default ProductCard
