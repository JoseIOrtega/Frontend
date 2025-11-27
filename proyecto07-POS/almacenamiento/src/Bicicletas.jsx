import {useState, useEffect} from "react";

function Bicicletas(){

    async function guardar(){
        await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/bicicletas",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
        }});
    }
    return(
        <div>
            <form onSubmit={guardar}>
                <input placeholder="escriba marca" required></input>
                <input placeholder="escriba color" required></input>
                <input placeholder="escriba el precio" required></input>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}
export default Bicicletas;