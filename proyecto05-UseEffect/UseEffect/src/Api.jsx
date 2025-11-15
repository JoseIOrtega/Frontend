import { useEffect,useState } from "react";

function Api(){
    const [perro,setPerro]=useState();
    const [status,setStatus]=useState();

    useEffect(()=>{
        listar();
    },[]);

    async function listar(){
        const res=await fetch('https://dog.ceo/api/breeds/image/random',{method:'GET'});
        const respuesta=await res.json();
        console.log(respuesta);
        setPerro(respuesta.message);
        setStatus(respuesta.status);
    }

    return(
        <div>
            <h1>Componente Api</h1>
            <img src={perro} alt=""/>
            <h2>{status}</h2>
        </div>
    )
}
export default Api;