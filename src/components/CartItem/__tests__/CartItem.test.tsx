import { screen, fireEvent, waitFor } from '@testing-library/react'

import CartItem from '..'

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

describe('CartItem Component', () => {
  test('renders correctly with product data', () => {
    const { container } = renderWithProvider(
      <CartItem product={initialState.cart.items[0]} />,
      {
        preloadedState: initialState
      }
    )

    expect(screen.getByText('Iphone 11')).toBeInTheDocument()
    expect(screen.getByText('R$3000')).toBeInTheDocument()
    expect(screen.getByText('Qntd:')).toBeInTheDocument()
    expect(container.querySelector('.quantity')?.innerHTML).toContain(
      initialState.cart.quantities[1].toString()
    )
  })

  test('increments quantity when the add button is clicked', () => {
    const { container, getByText } = renderWithProvider(
      <CartItem product={initialState.cart.items[0]} />,
      {
        preloadedState: initialState
      }
    )

    const addButton = getByText('+')
    fireEvent.click(addButton)

    const productId = initialState.cart.items[0].id
    const productQuantity =
      initialState.cart.quantities[
        productId as keyof typeof initialState.cart.quantities
      ]

    expect(addButton).toBeInTheDocument()
    expect(container.querySelector('.quantity')?.textContent).toContain(
      (productQuantity + 1).toString()
    )
  })

  test('decrements quantity when decrease button is clicked', () => {
    const { container, getByText } = renderWithProvider(
      <CartItem product={initialState.cart.items[0]} />,
      {
        preloadedState: initialState
      }
    )

    const decreaseButton = getByText('-')
    fireEvent.click(decreaseButton)

    const productId = initialState.cart.items[0].id
    const productQuantity =
      initialState.cart.quantities[
        productId as keyof typeof initialState.cart.quantities
      ]

    expect(decreaseButton).toBeInTheDocument()
    expect(container.querySelector('.quantity')?.textContent).toContain(
      (productQuantity - 1).toString()
    )
  })

  test('removes product from cart when close button is clicked', () => {
    const { container, store } = renderWithProvider(
      <CartItem product={initialState.cart.items[0]} />
    )

    const closeButton = container.querySelector('.close-button')
    if (closeButton) {
      fireEvent.click(closeButton)
    }

    const state = store.getState()
    expect(state.cart.items.length).toBe(0)
  })
})
