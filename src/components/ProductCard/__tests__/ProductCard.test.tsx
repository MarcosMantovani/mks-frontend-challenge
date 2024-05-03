import { screen, fireEvent } from '@testing-library/react'

import ProductCard from '..'

import { renderWithProvider } from '../../../utils/tests'

const initialState = {
  cart: {
    items: [
      {
        id: 1,
        name: 'Iphone 11',
        brand: 'Apple',
        description: 'Iphone 11',
        price: 3000,
        photo: '',
        created_at: '',
        updated_at: ''
      }
    ],
    quantities: {
      1: 2
    },
    isOpen: true
  }
}

const product = initialState.cart.items[0]

describe('ProductCard component', () => {
  test('renders product name and price correctly', () => {
    const { container } = renderWithProvider(<ProductCard product={product} />)

    expect(container.querySelector('.name')?.innerHTML).toContain(product.name)
    expect(container.querySelector('.price')?.innerHTML).toContain(
      'R$' + product.price
    )
  })

  test('adds product to cart when "Comprar" button is clicked', () => {
    const { store } = renderWithProvider(<ProductCard product={product} />)

    const buyButton = screen.getByText('Comprar')
    fireEvent.click(buyButton)

    const state = store.getState()
    expect(state.cart.items.length).toBe(1)
    expect(state.cart.items[0].id).toBe(product.id)
  })

  test('increases product quantity in cart when "Comprar" button is clicked', () => {
    const { store } = renderWithProvider(<ProductCard product={product} />)

    const initialQuantity = store.getState().cart.quantities[product.id] || 0

    const buyButton = screen.getByText('Comprar')
    fireEvent.click(buyButton)

    const state = store.getState()
    const finalQuantity = state.cart.quantities[product.id] || 0
    expect(finalQuantity).toBe(initialQuantity + 1)
  })
})
