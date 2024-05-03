import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

import { add } from '../../store/reducers/cart'

import shoppingBag from '../../assets/images/shopping-bag.svg'
import plusIcon from '../../assets/images/plus-outline.svg'

import * as S from './styles'
import { useCheckProductInCart } from '../../utils'
import { colors } from '../../styles'

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

  const isProductInCart = useCheckProductInCart(product.id)

  return (
    <S.Card whileHover={{ scale: 1.1 }}>
      <div className="content">
        <S.Photo>
          <img className="image" src={product.photo} alt={product.name} />
        </S.Photo>
        <S.MainInfo>
          <p className="name">{product.name}</p>
          <span className="price">R${Math.trunc(product.price)}</span>
        </S.MainInfo>
        <S.Description>{getDescription(product.description)}</S.Description>
      </div>
      <S.Button
        onClick={addToCart}
        animate={{
          backgroundColor: isProductInCart
            ? `${colors.priceGray}`
            : `${colors.blue}`
        }}
        whileHover={{ backgroundColor: `${colors.black}` }}
        transition={{ duration: 0.2 }}
      >
        <motion.img
          className="icon"
          src={isProductInCart ? plusIcon : shoppingBag}
          alt="Shopping bag"
          initial={{ opacity: 0 }} // define a opacidade inicial como 0
          animate={{ opacity: 1 }} // define a opacidade final como 1
          transition={{ duration: 0.5 }} // define a duração da transição
        />
        <p className="priceText">Comprar</p>
      </S.Button>
    </S.Card>
  )
}

export default ProductCard
