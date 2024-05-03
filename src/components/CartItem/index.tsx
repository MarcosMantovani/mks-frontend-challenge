import { useDispatch, useSelector } from 'react-redux'

import { add, subtract, remove } from '../../store/reducers/cart'
import { RootState } from '../../store'

import * as S from './styles'

type Props = {
  product: Product
}

const CartItem = ({ product }: Props) => {
  const dispatch = useDispatch()
  const cartQuantities = useSelector(
    (state: RootState) => state.cart.quantities
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
      <S.CloseButton onClick={removeProduct} whileHover={{ scale: 1.1 }}>
        X
      </S.CloseButton>
      <S.MainProductInfo>
        <img className="productPhoto" src={product.photo} alt="" />
        <p className="productName">{product.name}</p>
      </S.MainProductInfo>
      <S.SecondaryProductInfo>
        <S.QuantityButton>
          <span className="label">Qntd:</span>
          <div className="buttons">
            <button onClick={subtractProduct} className="decrease">
              -
            </button>
            <p className="quantity">{quantity}</p>
            <button onClick={addProduct} className="increase">
              +
            </button>
          </div>
        </S.QuantityButton>
        <p className="productPrice">R${Math.trunc(product.price)}</p>
      </S.SecondaryProductInfo>
    </S.Container>
  )
}

export default CartItem
