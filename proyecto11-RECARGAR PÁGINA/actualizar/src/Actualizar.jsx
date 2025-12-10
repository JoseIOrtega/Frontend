import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Actualizar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");

  // 🟡 GET para traer la info del usuario
  useEffect(() => {
    const cargarDatos = async () => {
      const res = await fetch(`http://localhost:3000/usuario/${id}`);
      const data = await res.json();
      setNombre(data.nombre); // carga el nombre en el input
    };

    cargarDatos();
  }, [id]);

  // 🟢 PUT para actualizar
  const actualizar = async () => {
    const res = await fetch(`http://localhost:3000/usuario/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });

    const data = await res.json();
    console.log("Actualizado:", data);

    // 🔵 Redirigir después de actualizar
    navigate("/");
  };

  return (
    <div>
      <h2>Actualizar ID: {id}</h2>

      <input
        type="text"
        placeholder="Nuevo nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <button onClick={actualizar}>GUARDAR CAMBIOS</button>
    </div>
  );
}

export default Actualizar;
