import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import cartIcon from '../../assets/images/cart-icon.svg'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => dispatch(open())

  return (
    <S.Container>
      <S.Title>
        MKS <span className="subtitle">Sistemas</span>
      </S.Title>
      <S.CartButton onClick={openCart}>
        <img className="cartIcon" src={cartIcon} alt="cart icon" />
        <p className="cartCounter">{items.length}</p>
      </S.CartButton>
    </S.Container>
  )
}

export default Header
