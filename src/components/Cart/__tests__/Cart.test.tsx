import { screen, render, fireEvent, getByTestId } from '@testing-library/react'

import Cart from '..'

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
      },
      {
        id: 2,
        name: 'Iphone 13',
        brand: 'Apple',
        description: 'Iphone 13',
        price: 4000,
        photo: '',
        created_at: '',
        updated_at: ''
      }
    ],
    quantities: {
      1: 1,
      2: 1
    },
    isOpen: true
  }
}

describe('Test for the cart component', () => {
  test('renders cart items when open', () => {
    const { getByText, getByTestId } = renderWithProvider(<Cart />, {
      preloadedState: initialState
    })

    expect(getByTestId('title').innerHTML).toContain('Carrinho')
    expect(getByText('Iphone 11')).toBeInTheDocument()
  })

  test('closes cart when close button is clicked', () => {
    const { container, store } = renderWithProvider(<Cart />, {
      preloadedState: {
        ...initialState,
        cart: {
          ...initialState.cart,
          isOpen: true
        }
      }
    })

    const closeButton = container.querySelector('.close-button')
    if (closeButton) {
      fireEvent.click(closeButton)
    }

    const updatedState = store.getState()
    expect(updatedState.cart.isOpen).toBe(false)
  })

  test('calculates total price correctly', () => {
    const { getByText } = renderWithProvider(<Cart />, {
      preloadedState: initialState
    })

    expect(getByText('Total:')).toBeInTheDocument()
    expect(getByText('R$7000')).toBeInTheDocument()
  })

  test('finalizes purchase correctly', () => {
    const { getByText, store } = renderWithProvider(<Cart />, {
      preloadedState: initialState
    })

    fireEvent.click(getByText('Finalizar Compra'))

    const state = store.getState()
    expect(state.cart.items.length).toBe(0)
    expect(getByText('Compra Finalizada!')).toBeInTheDocument()
  })
})
