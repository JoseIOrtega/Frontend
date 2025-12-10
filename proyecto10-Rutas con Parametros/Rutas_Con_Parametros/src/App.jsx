import RutasParametros from "./RutasParametros"
import Navbar from "./Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar></Navbar>

        <Routes>
          <Route path="/parametros/:id" element={<RutasParametros></RutasParametros>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App


