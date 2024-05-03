import { useSelector } from 'react-redux'

import { RootState } from '../store'

export const getTotalPrice = (
  items: Product[],
  quantities: Record<number, number>
): number => {
  let totalPrice = 0

  items.forEach((item) => {
    if (quantities[item.id]) {
      totalPrice += item.price * quantities[item.id]
    }
  })

  return totalPrice
}

export const useCheckProductInCart = (productId: number): boolean => {
  const items = useSelector((state: RootState) => state.cart.items)
  return items.some((item) => item.id === productId)
}
