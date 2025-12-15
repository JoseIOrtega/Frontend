import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  function crearCuenta(e) {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (nombre === "" || email === "" || password === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    navigate("/login");
  }

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={crearCuenta}>
        <input
          type="text"
          name="nombre"
          placeholder="Escriba nombre"
        />

        <input
          type="email"
          name="email"
          placeholder="Escriba email"
        />

        <input
          type="password"
          name="password"
          placeholder="Escriba password"
        />

        <button type="submit" className="botonSubmit">
          Crear cuenta
        </button>
      </form>

      <p>
        ¿Ya tienes cuenta?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
