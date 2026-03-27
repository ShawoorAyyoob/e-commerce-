import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './Components/Products'
import Home from './Components/Home';
import { CartProvider } from './Context/CartContetxt';
import Cart from './Components/Cart';

function App() {
  return (
    <BrowserRouter basename="/e-commerce">
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products-search" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
  )
}
export default App;