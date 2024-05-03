import { render } from '@testing-library/react'

import ProductCardSkeleton from '..'

describe('ProductCardSkeleton component', () => {
  test('renders skeleton elements correctly', () => {
    const { container } = render(<ProductCardSkeleton />)

    const contentDivList = container.getElementsByClassName('content')
    expect(contentDivList.length).toBeGreaterThan(0)
    const contentDiv = contentDivList[0]
    expect(contentDiv).toBeInTheDocument()
  })
})
