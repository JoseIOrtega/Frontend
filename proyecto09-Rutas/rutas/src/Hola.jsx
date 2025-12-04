import { useNavigate } from "react-router-dom";

function Hola(){

    const navigate=useNavigate();

    function llevar(){
        navigate("/msj");
    }

    return(
        <div>
            <h2>Este es el componente Hola</h2>
            <button onClick={llevar}>Click Mensaje</button>
        </div>
    )
}
export default Hola;