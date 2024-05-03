import { render, screen } from '@testing-library/react'

import Footer from '..'

describe('Test for the footer component', () => {
  test('should render correctly', () => {
    render(<Footer />)

    const footerText = screen.getByText(
      'MKS sistemas © Todos os direitos reservados'
    )
    expect(footerText).toBeInTheDocument()
  })
})
