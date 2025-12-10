import { useNavigate } from "react-router-dom";

function Inicio() {
  const navigate = useNavigate();

  const irActualizar = () => {
    navigate("/actualizar/5"); // ID de ejemplo
  };

  return (
    <div>
      <h1>Lista</h1>
      <button onClick={irActualizar}>Editar el ID 5</button>
    </div>
  );
}

export default Inicio;
