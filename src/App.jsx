import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FakeStore from './Pages/FakeStore'
import ProductPage from './Pages/ProductPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FakeStore />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App