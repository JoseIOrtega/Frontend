import { useState } from 'react';

function Estados(){
    const [nombre,setNombre]=useState("");

    return(
        <div>
            <h2>Estados</h2>
            <p>{nombre}</p>
            <button onClick={function (){setNombre("Alexandra")}}>cambiar</button>
            <br />
            <button onClick={()=>setNombre("Victor")}>cambiar</button>
        </div>
    )
}
export default Estados;