import { useEffect } from "react";

function Effect(){
    useEffect(()=>{
        console.log("Hola UseEffect")
    },[])
    return(
        <div>
            <h2>Hook UseEffect</h2>
        </div>
    )
}
export default Effect;