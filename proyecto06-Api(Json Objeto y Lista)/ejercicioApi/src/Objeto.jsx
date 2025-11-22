import { useEffect, useState } from "react";

function Objeto(){
    const [lovers,setLovers]=useState([]);
    useEffect(()=>{
        cargarApi();
    },[]);
    async function cargarApi(){
        const datos=await fetch('https://finalspaceapi.com/api/v0/episode/',{method:"GET"});
        const data=await datos.json();
        setLovers(data)
    }
    return(
        <div>
            <h2>Ejercicio 2</h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Imagen</th>
                </tr>
                {
                    lovers.map((color)=>(
                        <tr>
                            <td>{color.id}</td>
                            <td>{color.name}</td>
                            <td><img src={color.director}></img></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default Objeto;