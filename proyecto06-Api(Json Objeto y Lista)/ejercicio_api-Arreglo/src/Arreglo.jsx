import { useEffect, useState } from "react";

function Arreglo(){
    const [info,setInfo]=useState([]);
    useEffect(()=>{
        cargarApi();
    },[]);
    async function cargarApi(){
        const datos=await fetch('https://finalspaceapi.com/api/v0/episode/',{method:"GET"});
        const data=await datos.json();
        setInfo(data)
    }
    return(
        <div>
            <h2>Final Space</h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Director</th>
                    <th>Imagen</th>
                </tr>
                {
                    info.map((pos)=>(
                        <tr>
                            <td>{pos.id}</td>
                            <td>{pos.name}</td>
                            <td>{pos.director}</td>
                            <td><img src={pos.img_url}></img></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default Arreglo;