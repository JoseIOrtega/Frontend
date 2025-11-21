import { useEffect, useState } from "react";

function ChuckNorris(){
    const [id,setId]=useState("");
    const [icon,setIcon]=useState("");
    const [value,setValue]=useState("");

    useEffect(()=>{
        cargarDatos()
    },[]);
    async function cargarDatos(){
        const res=await fetch("https://api.chucknorris.io/jokes/random",{method:"GET"});
        const data=await res.json();

        setId(data.id);
        setIcon(data.icon_url);
        setValue(data.value);
    }
    return(
        <div>
            <div>
                <h2>Ejercicio 1</h2>
                <p>{id}</p>
                <img src={icon}></img>
                <p>{value}</p>
            </div>
        </div>
    )
}
export default ChuckNorris;