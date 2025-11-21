import { useEffect, useState } from "react";

function Colorslovers(){
    const [lovers,setLovers]=useState([]);
    useEffect(()=>{
        cargarApi();
    },[]);
    async function cargarApi(){
        const datos=await fetch('https://api.allorigins.win/raw?url=https://www.colourlovers.com/api/colors/new?format=json',{method:"GET"});
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
                            <td>{color.title}</td>
                            <td><img src={color.imageUrl}></img></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default Colorslovers;