import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <Link to="/">Saludo</Link>
            <Link to="/hola">Hola</Link>
            <Link to="/msj">Mensaje</Link>
        </nav>
    )
}
export default Navbar;