import { useState } from 'react';

function Estadosf(){
    const [numero,setNumero]=useState(0);
    function aumentarNumero(){
        setNumero(numero+1);
    }

    return(
        <div>
            <hr />
            <h2>Incrementar un dato</h2>
            <p>{numero}</p>
            <button onClick={()=>aumentarNumero()}>Aumentar</button>
        </div>
    )
}
export default Estadosf;