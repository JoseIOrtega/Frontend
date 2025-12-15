import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Página no encontrada</h1>
      <Link to="/">Volver al Home</Link>
    </div>
  );
}

export default NotFound;
