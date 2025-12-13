import {useState,useEffect} from "react";

function Articulos() {
    
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState(0);
    const [stock, setStock] = useState(0);
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState(true);

    async function guardar(e){
        e.preventDefault();
        await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/articulo",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
            body: JSON.stringify({nombre:nombre,descripcion:descripcion,precio:precio,stock:stock,categoria:categoria,estado:estado})
        });
    }


    const [datos, setDatos] = useState([]);
    useEffect(()=>{
        listado();
    },[]);
    async function listado(){
        const daticos=await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/articulo",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
        });
        const respuesta=await daticos.json();
        setDatos(respuesta);
    }

    return (
        <div>
            <h1>Artículos</h1>
            <h2>Crear artículo</h2>
            <form onSubmit={guardar}>
                <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                <input type="text" placeholder="Descripción" onChange={(e) => setDescripcion(e.target.value)} />
                <input type="number" placeholder="Precio" onChange={(e) => setPrecio(Number(e.target.value))} />
                <input type="number" placeholder="Stock" onChange={(e) => setStock(Number(e.target.value))} />
                <input type="text" placeholder="Categoría" onChange={(e) => setCategoria(e.target.value)} />
                <select onChange={(e) => setEstado(e.target.value === "true")}>
                    <option value="true">Activo</option>
                    <option value="false">Inactivo</option>
                </select>
                <button type="submit">Guardar</button>
                <button type="">Actualizar</button>
            </form>

            <h2>Listado de Artículos</h2>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Categoría</th>
                    <th>Estado</th>
                </thead>
                <tbody>
                    {datos.map((a)=>(
                        <tr>
                            <td>{a.id}</td>
                            <td>{a.nombre}</td>
                            <td>{a.descripcion}</td>
                            <td>{a.precio}</td>
                            <td>{a.stock}</td>
                            <td>{a.categoria}</td>
                            <td>{a.estado ? "Activo" : "Inactivo"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Articulos