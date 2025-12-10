import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articulos from "./Articulos";
import Actualizar from "./Actualizar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Articulos />} />
        <Route path="/actualizar/:id" element={<Actualizar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
