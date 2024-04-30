import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './routes'
import { GlobalCss } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <PageRoutes />
    </BrowserRouter>
  )
}

export default App
