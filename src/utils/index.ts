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
