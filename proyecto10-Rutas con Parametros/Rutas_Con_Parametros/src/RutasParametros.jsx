import { useParams } from "react-router-dom"

function RutasParametros() {
    const params=useParams(); //destructuración
    return (
        <div>
            <h2>Rutas con Parametros</h2>
            <p>El id es: {params.id}</p>
        </div>
    )
}
export default RutasParametros



