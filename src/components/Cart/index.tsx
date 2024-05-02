import { useDispatch, useSelector } from 'react-redux'

import { close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { getTotalPrice } from '../../utils'

import CartItem from '../CartItem'

import * as S from './styles'

const Cart = () => {
  const dispatch = useDispatch()

  const { isOpen, items, quantities } = useSelector(
    (state: RootReducer) => state.cart
  )

  const closeCart = () => dispatch(close())

  const totalPrice = getTotalPrice(items, quantities)

  return (
    <S.Container $isOpen={isOpen}>
      <S.CloseButton onClick={closeCart}>X</S.CloseButton>
      <div>
        <S.Title>
          Carrinho
          <br />
          de compras
        </S.Title>
        <S.CartItemList>
          {items.map((product) => (
            <li key={product.id}>
              <CartItem product={product} />
            </li>
          ))}
        </S.CartItemList>
      </div>
      <S.CartFooter>
        <p className="totalText">Teste:</p>
        <p>{totalPrice}</p>
      </S.CartFooter>
      <S.FinishPurchaseButtoin>Finalizar Compra</S.FinishPurchaseButtoin>
    </S.Container>
  )
}

export default Cart
