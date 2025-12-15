import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const productos = [
    { id: 1, name: "Laptop", price: 2500 },
    { id: 2, name: "Mouse", price: 50 },
    { id: 3, name: "Teclado", price: 120 },
    { id: 4, name: "Monitor", price: 900 },
    { id: 5, name: "Audífonos", price: 180 },
    { id: 6, name: "Webcam", price: 300 },
  ];

  const verDetalle = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div>
      <h1>Productos</h1>

      {productos.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.name}</h3>
          <p>Precio: ${producto.price}</p>
          <button onClick={() => verDetalle(producto.id)}>
            Ver detalle
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
