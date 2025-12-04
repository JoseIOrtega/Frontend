import Hola from "./Hola"
import Saludo from "./Saludo"
import Mensaje from "./Mensaje"
import Navbar from "./Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/hola" element={<Hola></Hola>}></Route>
          <Route path="/" element={<Saludo></Saludo>}></Route>
          <Route path="/msj" element={<Mensaje></Mensaje>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
