import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { close, clear } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { getTotalPrice } from '../../utils'

import CartItem from '../CartItem'

import * as S from './styles'
import { colors } from '../../styles'

const Cart = () => {
  const dispatch = useDispatch()

  const { isOpen, items, quantities } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [purchaseCompleted, setPurchaseCompleted] = useState(false)

  const closeCart = () => dispatch(close())

  const finalizePurchase = () => {
    dispatch(clear())
    setPurchaseCompleted(true)
  }

  const totalPrice = getTotalPrice(items, quantities)

  useEffect(() => {
    if (items.length > 0 && purchaseCompleted) {
      setPurchaseCompleted(false)
    }
  }, [items.length, purchaseCompleted])

  return (
    <S.Container
      initial={{ x: '100vw' }}
      exit={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100vw' }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
    >
      <S.CloseButton onClick={closeCart} whileHover={{ scale: 1.1 }}>
        X
      </S.CloseButton>
      <div className="content">
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
        <p>R${totalPrice}</p>
      </S.CartFooter>
      <S.FinishPurchaseButton
        onClick={finalizePurchase}
        initial={{ backgroundColor: colors.black }}
        animate={{
          backgroundColor: purchaseCompleted ? colors.gray : colors.black
        }}
        whileHover={{ backgroundColor: `${colors.gray}` }}
        transition={{ duration: 0.2 }}
      >
        {purchaseCompleted ? <>Compra Finalizada!</> : <>Finalizar Compra</>}
      </S.FinishPurchaseButton>
    </S.Container>
  )
}

export default Cart
