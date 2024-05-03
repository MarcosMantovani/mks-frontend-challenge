import { screen } from '@testing-library/react'

import Header from '..'

import { renderWithProvider } from '../../../utils/tests'

describe('Test for the header component', () => {
  test('should render correctly', () => {
    renderWithProvider(<Header />)

    expect(screen.getByText('MKS')).toBeInTheDocument()
  })

  test('It should render with two items in the cart', () => {
    renderWithProvider(<Header />, {
      preloadedState: {
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
          isOpen: false
        }
      }
    })

    expect(screen.getByTestId('cartCounter').innerHTML).toContain('2')
  })
})
