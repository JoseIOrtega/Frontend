import { Link } from "react-router-dom"

function Navbar() {
    const valor=30;

    return (
        <div>
            <nav>
                <Link to={`/parametros/${valor}`}>parametros</Link>
            </nav>
        </div>
    )
}
export default Navbar


