import { BrowserRouter, Routes, Route } from "react-router-dom";
import Actualizar from "./Actualizar";
import Inicio from "./Inicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/actualizar/:id" element={<Actualizar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
