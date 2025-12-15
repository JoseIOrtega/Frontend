import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Register from "./Register"
import Login from './Login'
import Products from './Products'
import ProductDetail from './ProductDetail'
import Cart from './Cart'
import NotFound from './NotFound'
import Navbar from './Navbar'
import './style.css'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path="/products/:id" element={<ProductDetail></ProductDetail>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App