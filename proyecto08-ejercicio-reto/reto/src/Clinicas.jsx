import {useState,useEffect} from "react";

function Clinicas(){

    const [nombre,setNombre]=useState("");
    const [ciudad,setCiudad]=useState("");

    const[datos,setDatos]=useState([]);
    useEffect(()=>{
        listado();
    },[]);

    async function guardar(e){
        e.preventDefault();
        await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/clinicas",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
            body:JSON.stringify({nombre:nombre,ciudad:ciudad})
        });
    }

    async function listado(){
        const daticos=await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/clinicas",{
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
            <h2>Registrar Clínicas</h2>
            <form onSubmit={guardar}>
                <input placeholder="escriba su nombre" required onChange={(e)=>setNombre(e.target.value)}></input>
                <input placeholder="escriba su ciudad" required onChange={(e)=>setCiudad(e.target.value)}></input>
                <button type="submit">Guardar</button>
            </form>
            <h2>Listado Clínicas</h2>
            <table>
                <thead>
                    <th>Id Clinica</th>
                    <th>Nombre</th>
                    <th>Ciudad</th>
                </thead>
                <tbody>
                    {datos.map((d)=>(
                        <tr>
                            <td>{d.id_clinica}</td>
                            <td>{d.nombre}</td>
                            <td>{d.ciudad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )    
}
export default Clinicas;