import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function llevar(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" || password === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    navigate("/products");
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={llevar}>
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
          Login
        </button>
      </form>

      <p>
        ¿No tienes cuenta?{" "}
        <Link to="/register">Regístrate</Link>
      </p>
    </div>
  );
}

export default Login;
