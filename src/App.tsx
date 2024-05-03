import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { configuratedStore } from './store'

import PageRoutes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'

import { GlobalCss } from './styles'

function App() {
  const store = configuratedStore()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Header />
        <PageRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
