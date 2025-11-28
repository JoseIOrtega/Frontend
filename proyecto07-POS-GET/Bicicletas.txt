import {useState,useEffect} from "react";

function Bicicletas(){

    const [marca,setMarca]=useState("");
    const [color,setColor]=useState("");
    const [precio,setPrecio]=useState(0);

    const[datos,setDatos]=useState([]);

    async function guardar(e){
        e.preventDefault();
        await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/bicicletas",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
            body:JSON.stringify({marca:marca,color:color,precio_alquiler:precio})
        });
    }

    useEffect(()=>{
        listado();
    },[]);

    async function listado(){
        const daticos=await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/bicicletas",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            }
        });

        const respuesta=await daticos.json();
        setDatos(respuesta);
    }

    return(
        <div>
            <h1>Guardar Bicicletas</h1>
            <form onSubmit={guardar}>
                <input placeholder="escriba marca" required onChange={(e)=>setMarca(e.target.value)}></input>
                <input placeholder="escriba color" required onChange={(e)=>setColor(e.target.value)}></input>
                <input placeholder="escriba el precio" required onChange={(e)=>setPrecio(e.target.value)}></input>
                <button type="submit">Guardar</button>
            </form>
            <h1>Listado Bicicletas</h1>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Marca</th>
                    <th>Color</th>
                    <th>precio</th>
                </thead>
                <tbody>
                    {datos.map((d)=>(
                        <tr>
                            <td>{d.id}</td>
                            <td>{d.marca}</td>
                            <td>{d.color}</td>
                            <td>{d.precio_alquiler}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Bicicletas;