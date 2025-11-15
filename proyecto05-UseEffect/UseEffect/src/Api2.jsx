import { useEffect, useState } from "react";

function Api2(){
    const [error,setError]=useState("");
    const [type,setType]=useState("");
    useEffect(()=>{
        traerApi();
    },[])
    async function traerApi(){
        const res=await fetch('https://api.stripe.com/',{method:"Get"});
        const data=await res.json();
        console.log(data);
        setError(data.error.message);
        setType(data.error.type);
    }

    return(
        <div>
            <h1>Componente Api2</h1>
            <p>{error}</p>
            <p>{type}</p>
        </div>
    )
}
export default Api2;