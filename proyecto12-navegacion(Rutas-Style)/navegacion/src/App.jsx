import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./Register"
import Login from './Login'
import Navbar from './Navbar'
import './style.css'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/' element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App