import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  // Obtener productos del carrito
  const carrito = JSON.parse(localStorage.getItem("cart")) || [];

  // Calcular total
  const total = carrito.reduce(
    (acum, producto) => acum + producto.price,
    0
  );

  // Vaciar carrito
  const vaciarCarrito = () => {
    localStorage.removeItem("cart");
    navigate("/cart"); // refresca la vista
  };

  return (
    <div>
      <h1>Carrito</h1>

      {carrito.length === 0 && <p>El carrito está vacío</p>}

      {carrito.map((producto, index) => (
        <div key={index}>
          <p>
            {producto.name} - ${producto.price}
          </p>
        </div>
      ))}

      {carrito.length > 0 && (
        <>
          <h3>Total: ${total}</h3>

          <button onClick={vaciarCarrito}>
            Vaciar carrito
          </button>

          <button onClick={() => navigate("/products")}>
            Seguir comprando
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
