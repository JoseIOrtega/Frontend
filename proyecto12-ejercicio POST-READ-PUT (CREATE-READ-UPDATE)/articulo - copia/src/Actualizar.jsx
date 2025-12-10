import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Actualizar() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState(0);
    const [stock, setStock] = useState(0);
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState(true);

    useEffect(()=>{
        obtenerArticulo();
    },[]);

    async function obtenerArticulo() {
        const res = await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/articulo?id=eq.${id}`,{
            headers:{
                "Content-Type":"application/json",
                apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
        });
        const data = await res.json();
        const art = data[0];
        setNombre(art.nombre);
        setDescripcion(art.descripcion);
        setPrecio(art.precio);
        setStock(art.stock);
        setCategoria(art.categoria);
        setEstado(art.estado);
    }

    async function actualizar() {
        await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/articulo?id=eq.${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type":"application/json",
                apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
            body: JSON.stringify({nombre,descripcion,precio,stock,categoria,estado})
        });
        navigate("/");
    }

    return (
        <div>
        <h2>Editar artículo #{id}</h2>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        <input type="number" value={precio} onChange={(e) => setPrecio(Number(e.target.value))} />
        <input type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} />
        <input value={categoria} onChange={(e) => setCategoria(e.target.value)} />

        <select value={estado} onChange={(e) => setEstado(e.target.value === "true")}>
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
        </select>

        <button onClick={actualizar}>Guardar cambios</button>
        </div>
    );
}

export default Actualizar;
