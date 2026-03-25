import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FilteredProductList from './Components/Products'
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products-search" element={<FilteredProductList />}></Route>
      </Routes>
      </BrowserRouter>
  )
}
export default App;