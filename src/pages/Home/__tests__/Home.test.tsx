import Home from '..'
import { renderWithProvider } from '../../../utils/tests'

describe('Test for the Home component', () => {
  test('renders without crashing', () => {
    renderWithProvider(<Home />)
  })
})
