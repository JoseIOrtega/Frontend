import { useParams, useNavigate } from "react-router-dom";

const productos = [
  { id: 1, name: "Laptop", price: 2500 },
  { id: 2, name: "Mouse", price: 50 },
  { id: 3, name: "Teclado", price: 120 },
  { id: 4, name: "Monitor", price: 900 },
  { id: 5, name: "Audífonos", price: 180 },
  { id: 6, name: "Webcam", price: 300 },
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const producto = productos.find(
    (p) => p.id === Number(id)
  );

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  const agregarAlCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("cart")) || [];
    carrito.push(producto);
    localStorage.setItem("cart", JSON.stringify(carrito));
    navigate("/cart");
  };

  return (
    <div>
      <h1>Detalle del producto</h1>

      {/* ID leído desde params */}
      <p>ID: {id}</p>

      {/* Datos buscados en el array */}
      <p>Nombre: {producto.name}</p>
      <p>Precio: ${producto.price}</p>

      <button onClick={agregarAlCarrito}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductDetail;
