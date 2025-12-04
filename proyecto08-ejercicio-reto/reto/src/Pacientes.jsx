import {useState,useEffect} from "react";

function Pacientes(){
    const [nombre,setNombre]=useState("");
    const [telefono,setTelefono]=useState("");
    const [idclinica,setIdclinica]=useState("");

    const[datos,setDatos]=useState([]);

    useEffect(()=>{
        listado();
    },[]);

    async function guardar(e){
        e.preventDefault();
        await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/pacientes",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
            body:JSON.stringify({nombre:nombre,telefono:telefono,id_clinica:idclinica})
        });
    }

    async function listado(){
        const daticos=await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/pacientes",{
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
            <h2>Registrar Pacientes</h2>
            <form onSubmit={guardar}>
                <input placeholder="escriba su nombre" required onChange={(e)=>setNombre(e.target.value)}></input>
                <input placeholder="escriba su telefono" required onChange={(e)=>setTelefono(e.target.value)}></input>
                <input placeholder="escriba el Id clinica" required onChange={(e)=>setIdclinica(e.target.value)}></input>
                <button type="submit">Guardar</button>
            </form>
            <h2>Listado de Pacientes</h2>
            <table>
                <thead>
                    <th>Id Paciente</th>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Id Clinica</th>
                </thead>
                <tbody>
                    {datos.map((d)=>(
                        <tr>
                            <td>{d.id_paciente}</td>
                            <td>{d.nombre}</td>
                            <td>{d.telefono}</td>
                            <td>{d.id_clinica}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )  
}
export default Pacientes;