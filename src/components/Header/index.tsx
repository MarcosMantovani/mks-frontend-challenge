import { useDispatch, useSelector } from 'react-redux'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import cartIcon from '../../assets/images/cart-icon.svg'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const controls = useAnimation()

  const { items, quantities } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => dispatch(open())

  // animating the cart button when adding a product to the cart
  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({ rotate: 15, transition: { duration: 0.1 } })
      await controls.start({ rotate: -15, transition: { duration: 0.1 } })
      await controls.start({ rotate: 5, transition: { duration: 0.1 } })
      await controls.start({ rotate: -5, transition: { duration: 0.1 } })
      controls.start({ rotate: 0, transition: { duration: 0.1 } })
    }

    startAnimation()
  }, [controls, items.length, quantities])

  return (
    <S.Container>
      <S.Title
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        MKS{' '}
        <motion.span
          className="subtitle"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Sistemas
        </motion.span>
      </S.Title>
      <S.CartButton
        onClick={openCart}
        whileHover={{ scale: 1.1 }}
        animate={controls}
      >
        <img className="cartIcon" src={cartIcon} alt="cart icon" />
        <p className="cartCounter">{items.length}</p>
      </S.CartButton>
    </S.Container>
  )
}

export default Header
