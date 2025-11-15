import { useState } from 'react';

function Estadomensaje(){
    const [mensaje,setMensaje]=useState("");

    return(
        <div>
            <hr />
            <h2>Estados de mensaje</h2>
            <p>{mensaje}</p>
            <input type="text" onChange={(event)=>setMensaje(event.target.value)}></input>
        </div>
    )
}
export default Estadomensaje;