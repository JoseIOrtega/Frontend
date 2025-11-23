import { useEffect, useState } from "react";

function Objeto(){
    const [id,setId]=useState("");
    const [type,setType]=useState("");
    const [poster,setPoster]=useState("");

    useEffect(()=>{
        cargarDatos()
    },[]);
    async function cargarDatos(){
        const res=await fetch("https://www.whenisthenextmcufilm.com/api",{method:"GET"});
        const data=await res.json();

        setId(data.id);
        setType(data.type);
        setPoster(data.poster_url);
    }
    return(
        <div>
            <div>
                <h2>Poster Pelicula</h2>
                <p>{id}</p>
                <p>{type}</p>
                <img src={poster}></img>
            </div>
        </div>
    )
}
export default Objeto;