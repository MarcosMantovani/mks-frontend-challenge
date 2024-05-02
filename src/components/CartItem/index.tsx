import { useDispatch, useSelector } from 'react-redux'

import { add, subtract, remove } from '../../store/reducers/cart'

import * as S from './styles'
import { RootReducer } from '../../store'

type Props = {
  product: Product
}

const CartItem = ({ product }: Props) => {
  const dispatch = useDispatch()
  const cartQuantities = useSelector(
    (state: RootReducer) => state.cart.quantities
  )

  const quantity = cartQuantities[product.id] || 0

  const subtractProduct = () => {
    if (quantity > 1) {
      dispatch(subtract(product.id))
    }
  }

  const addProduct = () => dispatch(add(product))

  const removeProduct = () => dispatch(remove(product.id))

  return (
    <S.Container>
      <S.CloseButton onClick={removeProduct}>X</S.CloseButton>
      <S.MainProductInfo>
        <img className="productPhoto" src={product.photo} alt="" />
        <p className="productName">{product.name}</p>
      </S.MainProductInfo>
      <S.SecondaryProductInfo>
        <S.CartButton>
          <button onClick={subtractProduct} className="decrease">
            -
          </button>
          <p className="quantity">{quantity}</p>
          <button onClick={addProduct} className="increase">
            +
          </button>
        </S.CartButton>
        <p className="productPrice">R${Math.trunc(product.price)}</p>
      </S.SecondaryProductInfo>
    </S.Container>
  )
}

export default CartItem
